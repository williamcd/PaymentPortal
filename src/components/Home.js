import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
    render() {
        return (
            <HomeStyle>
                <div>Greeting text</div>
                <div>About us</div>
                <div>links and stuff</div>
            </HomeStyle>
        );
    }
}

const HomeStyle = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;
`

export default Home;