import React, { Component } from 'react';
import styled from 'styled-components';

class HistoryCard extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Card>
                <div className="date">{this.props.data.dueDate}</div>
                <div className="reason">{this.props.data.info}</div>
                <div className="status">{this.props.data.status ? <p>paid</p> : <p>unpaid</p>}</div>
                <div className="cost">{this.props.data.discount}</div>
                <div className="total">Total due: ${this.props.data.total}</div>
                <div className="buttons">
                    <button className="info">More...</button>
                    <button className="paynow">Pay now</button>
                </div>
            </Card>
        );
    }
}
const Card = styled.div`
    width: 220px;
    height: 330px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .date {
        height: 40px;
        width: 200px;
        font-size: 18px;
    }
    .reason {
        height: 80px;
        width: 200px;
        font-size: 18px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    .status {
        height: 40px;
        width: 200px;
        font-size: 18px;
    }
    .cost {
        height: 60px;
        width: 200px;
        font-size: 18px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    .total {
        height: 40px;
        width: 200px;
        font-size: 18px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
    }
    .info {
        height: 35px;
        width: 100px;
        font-size: 25px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(37, 14, 57, 0.9);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }
    .paynow {
        height: 35px;
        width: 100px;
        margin-left: 10px;
        font-size: 25px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(37, 14, 57, 0.9);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }
`

export default HistoryCard;