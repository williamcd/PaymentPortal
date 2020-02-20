import React, { Component } from 'react';
import styled from 'styled-components';

class Affiliates extends Component {
    render() {
        return (
            <Alignment>
                <Title>Shop with our partners and we will contribute to goal of paying of your healthcare bill!</Title>
                <AffiliateLogos>
                    <Logo src="https://sqy7rm.media.zestyio.com/logo-airbnb2.svg"></Logo>
                    <Logo src="https://sqy7rm.media.zestyio.com/icon.H1OlVh_Lz.f1cb27a519bdb5b6ed34049a5b86e317.png"></Logo>
                    <Logo src="https://sqy7rm.media.zestyio.com/logo-blue-apron.svg"></Logo>
                    <Logo src="https://sqy7rm.media.zestyio.com/logo-boxed2.svg"></Logo>
                    <Logo src="https://sqy7rm.media.zestyio.com/icon.BkbJP0G6bB.f1cb27a519bdb5b6ed34049a5b86e317.png"></Logo>
                    <Logo src="https://sqy7rm.media.zestyio.com/colorgrid-opt.f1cb27a519bdb5b6ed34049a5b86e317.png"></Logo>
                    <Logo src=""></Logo>
                    <Logo src=""></Logo>
                    <Logo src=""></Logo>
                    <Logo src=""></Logo>
                    <Logo src=""></Logo>
                    <Logo src=""></Logo>
                </AffiliateLogos>
            </Alignment>
        );
    }
}
const Alignment = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
    width: 80%;
`
const AffiliateLogos = styled.div`
    width: calc(100vw - 300px);
    height: 60vh;
    /* background-color: yellow; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    overflow: scroll;
`
const Logo = styled.img`
    width: 215px;
    height: 116px;
    margin: 0 10px 20px;
    background-color: white;
    box-shadow: 0 11px 19px 0 rgba(0,0,0,0.07);
`


export default Affiliates;