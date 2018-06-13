import React, { Component } from 'react';
import {Col, Row, Button, message } from 'antd';
import { Map, TileLayer, Marker} from 'react-leaflet';
import {randomInteger, calculatedIstance} from '../../../core/utils/index';
import * as constant from '../../../core/utils/constans';

class Game extends Component {
    constructor() {
        super();
        this.state = this.init();
    }
    init = ()=>{
        return{
          lat: 54.525961,
          lng: 15.255119,
          zoom: 4,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          city: constant.cities[randomInteger(0, constant.cities.length - 1)],
          cities: constant.cities,
          count: 0,
          status: constant.START,
          distance: 0,
          maxDistance: constant.MAX_DISTANCE
        }
    }
    addMarker = (e)=>{        
        if (this.state.status === constant.START || 
            this.state.status === constant.SELECTED){
            this.setState({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
                status: constant.SELECTED
            })
        }        
    }
    changeViewPort = (viewport) => {
        if (viewport.zoom !== this.state.zoom){
            this.setState({zoom: viewport.zoom});
        }
    }
    showMarker = () =>{
        const position = [this.state.lat, this.state.lng];
        switch(this.state.status){
            case constant.START:
            case constant.END:
                return null;
            case constant.SELECTED:
                return (
                    <Marker position={position} icon={ constant.icon } /> 
                );
            case constant.PLACED:
                return (
                    <React.Fragment>
                        <Marker position={position} icon={ constant.icon } /> 
                        <Marker position={this.state.city.position} icon={ constant.iconSuccess } />     
                    </React.Fragment>                    
                );            
            default:
                return null;
        }                   
    }    
    setStatusStart = () =>{
        const city = this.state.cities[randomInteger(0, this.state.cities.length - 1)]
        setTimeout(()=>{
            this.setState({
                status: constant.START, 
                city,
                lat: 54.525961,
                lng: 15.255119,
                zoom: 4,
            });
        }, constant.TIMER);
    }
    onPlace = () =>{
        const position = {lat: this.state.lat, lng: this.state.lng};
        const distance = calculatedIstance(position, this.state.city.position);        
        const cities = this.state.cities.filter(sity => sity.name !== this.state.city.name);
        const maxDistance = this.state.maxDistance - distance;
        let count = this.state.count;
        if (distance <= constant.MIN_DISTANCE){
            count = ++this.state.count;
        }  
        if (!cities.length && maxDistance > 0){
            this.setState({
                status: constant.WINN,
                count,
                maxDistance
            }, ()=>{
                setTimeout(()=>{
                    this.setState(this.init);
                }, constant.TIMER)
            });
            if (count > 0){
                message.success(`You won! You found - ${count} city(-ies).`);
                return;
            }
            message.error(`Game End! You found - ${count} city(-ies).`);    
            return;
        }               
        if (distance <= constant.MIN_DISTANCE){   
            message.success(`Correct! Distance - ${distance.toFixed(2)} km.`);
            this.setState({
                count,
                cities,                
                status: constant.PLACED
            }, this.setStatusStart);
            return;        
        }        
        if (maxDistance <= 0){  
            message.error(`Game End! You found - ${count} city(-ies).`);    
            this.setState({status: constant.END, maxDistance: 0}, ()=>{
                setTimeout(()=>{
                    this.setState(this.init)
                }, constant.TIMER)
            });
            return;
        }      
        message.warning(`Not correct! Distance - ${distance.toFixed(2)} km.`);
        this.setState({
            cities,            
            status: constant.PLACED,
            maxDistance
        }, this.setStatusStart);     
    }
    render() {
        const {url, city, maxDistance, count} = this.state;
        const position = [this.state.lat, this.state.lng];
        return (
            <Row className='b-game'>
                <Row>
                    <Col xs={24} md={12} lg={12} >            
                        <div className='bordered-text text'>{`${count} cities placed`}</div>                        
                    </Col>
                    <Col xs={24} md={12} lg={12}>           
                        <div className='bordered-text text'>{`${maxDistance.toFixed(2)} kilometers`}</div>       
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text'>{`Select the location of`}</Col>
                    <Col span={24} className='text bold-text'>{`${city.name}`}</Col>
                </Row>
                <Row>
                    <Col span={24} >            
                        <Map 
                            center={position} 
                            zoom={this.state.zoom} 
                            style={{height: 600}} 
                            onClick={this.addMarker}
                            onViewportChanged={this.changeViewPort}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url={url}
                            />
                            {this.showMarker()}                                                                             
                        </Map>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.onPlace} className='place-btn'>Place</Button>
                </Row>
                    
                
            </Row>
        );
    }
}

export default Game;