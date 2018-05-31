import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Input } from 'antd'
import { connect } from 'react-redux'
import {fridgeAction} from '../../../core/fridge';
import FridgeListItem from '../../molecules/FridgeListItem';
import * as constant from '../../../core/utils/constans';

class Fridge extends PureComponent {
    decreaseItemAmount = (item) =>{
        const {num} = this.props;
        this.props.dispatch(fridgeAction.decreaseItemAmount(num, item))
    }
    render() {
        const {fridges, num} = this.props;
        const items = fridges[num];
        console.log(items, num)
        return (
            <Card
                title={<div>{`Fridge# ${num + 1}`}</div>}
                extra={ ''}>
                {items.map((item, key) =>
                    <FridgeListItem
                        key={key}
                        item={item}
                        onDecrease={this.decreaseItemAmount}/>
                )}
            </Card>
        );
    }
}

Fridge.propTypes = {
    num: PropTypes.number.isRequired,
    fridges: PropTypes.array.isRequired
  }
const mapStateToProps = store => ({
    fridges: store.fridge.fridges,  
});
export default connect(mapStateToProps)(Fridge)