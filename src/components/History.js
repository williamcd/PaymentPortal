import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryCard from './HistoryCard';

class History extends Component {
    render() {
        return (
            <Everything>
                <Graph>
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </Graph>
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
`
const Graph = styled.div`
    width: calc(100vw - 200px);
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: scroll;
`
const TotalRemaining = styled.div`
    height: 20vh;
    width: calc(100vw - 200px);
    background-color: yellow;
`

export default History;