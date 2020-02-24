import React, { Component } from 'react';
import styled from 'styled-components';

class Payments extends Component {
    render() {
        return (
            <Grid>
                <GridRow>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                    <GridItem>text</GridItem>
                </GridRow>
            </Grid>
        );
    }
}

const Grid = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    align-items: center;
    flex-direction: column;
`
const GridRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 10px;
    width: calc(95vw - 200px);
    height: 50px;
    background-color: yellow;
    align-content: center;
`
const GridItem = styled.div`
    height: 40px;
    flex-basis: 20%;
    background-color: red;
    -ms-flex: auto;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
`

export default Payments;