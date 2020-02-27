import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryCard from './HistoryCard';

class HistoryList extends Component {
    render() {
        return (
            <Graph>
                {this.props.payments.map((card, i) => {
                    return (
                        <HistoryCard data={card} />
                    )
                })}
            </Graph>
        );
    }
}
const Graph = styled.div`
    width: calc(100vw - 200px);
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: scroll;
`

export default HistoryList;