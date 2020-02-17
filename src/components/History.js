import React, { Component } from 'react';
import styled from 'styled-components';

class History extends Component {
    render() {
        return (
            <Graph>
                history
            </Graph>
        );
    }
}

const Graph = styled.div`
    width: calc(100vw - 200px);
`

export default History;