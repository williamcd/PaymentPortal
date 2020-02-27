import React, { Component } from 'react';
import styled from 'styled-components';

class HistoryView extends Component {
    render() {
        return (
            <Card>
                ComponentView
            </Card>
        );
    }
}
const Card = styled.div`
    height: 80vh;
    width: calc(100vw - 200px);
    background-color: yellow;
`

export default HistoryView;