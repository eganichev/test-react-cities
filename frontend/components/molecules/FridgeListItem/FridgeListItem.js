import React, { Component } from 'react';
import {Button, Icon, Col, Row} from 'antd';
import moment from 'moment'
import PropTypes from 'prop-types';
import * as constant from '../../../core/utils/constans';

class FridgeListItem extends Component {
  itemPurchase = (fridge)=>{
    this.props.itemPurchase(fridge, this.props.item);
  }
    render() {
      const { item = {}, onIncrease, onDecrease } = this.props;
        return (
          <Row gutter={8} className='b-item'>               
              <Col xs={24} md={20} lg={20}>
                <Row>{`${item.name}: ${item.amount}pc`}</Row>
                <Row><small>{moment(item.date).fromNow()}</small></Row>
              </Col> 
              <Col xs={24} md={4} lg={4} className='b-button'>                
                <Col span={12}><Icon type="minus-square-o cursor" style={{ fontSize: 24, color: '#188fff' }} onClick={()=>onDecrease(item)}/></Col>
              </Col>              
          </Row>
        )
    
      }
    }
    
    FridgeListItem.propTypes = {
      item: PropTypes.object.isRequired,
      onIncrease: PropTypes.func,
      onDecrease: PropTypes.func,
      itemPurchase: PropTypes.func,
    }
    
    export default FridgeListItem;
    