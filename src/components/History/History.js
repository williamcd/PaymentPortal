import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryCard from './HistoryCard';
import HistoryList from './HistoryList';
import HistoryView from './HistoryView';

class History extends Component {
    state = {
        data: [
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200},
            {dueDate: '11/20/20', info: 'something about why this is here', status: true, discount: 'You saved x amount', total: 200}
        ]
    }
    render() {
    return (
        <Everything>
            <HistoryList payments={this.state.data}/>
            {/* <HistoryView /> */}
            <TotalRemaining>
                <div>total paid</div>
                <div>total due</div>
                <div>total saved</div>
            </TotalRemaining>
        </Everything>
    );
}
}

const Everything = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
const TotalRemaining = styled.div`
    height: 20vh;
    width: calc(100vw - 200px);
    border-top: 1px solid black;
`

export default History;