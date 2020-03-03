import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className="text">Here's a bunch of text about legal garbage and like 40 copyright symbols blah blah</div>
                <div className="images">
                    <img src="https://capiopfw.com/wp-content/uploads/2019/11/CapioMasterLogoReverse.svg" height="80" width="200" alt="capio logo"></img>
                    <img src="https://assetcarellc.com/wp-content/uploads/2018/06/assetcare-logo.png" height="80" width="200" alt="capio logo"></img>
                </div>
            </FooterStyle>
        );
    }
}

const FooterStyle = styled.div`
    height: 150px;
    color: white;
    background-color: #200E30;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        /* background-color: #F2F2F2; */
        z-index: 1;
        margin-left: 40px;
    }
    .text {
        margin-left: 40px;
    }
    .images {
        margin-right: 40px;
    }
`

export default Footer;