import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <HomeStyle>
                <div className="greeting">Greeting text</div>
                <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada, est vitae tincidunt mattis, odio lorem ornare nibh, at pretium tellus sapien at elit. Maecenas urna risus, pellentesque at elit venenatis, euismod vulputate ante. Nulla ac vulputate quam. Aenean placerat lacus vel vulputate facilisis. Aliquam erat volutpat. Praesent congue arcu ipsum, non accumsan dui tempus ac. Nam efficitur, tellus vitae fermentum malesuada, nisl urna dignissim turpis, id pellentesque velit mi a nisi. Nulla a ultricies mi, eget lobortis eros. Etiam et elit mauris. Fusce vestibulum dui porttitor nisl pharetra, vitae dictum metus placerat. Vestibulum scelerisque vestibulum ipsum eget feugiat. Phasellus ullamcorper lectus et tellus tincidunt tempus. Cras lectus magna, porta id urna mattis, vestibulum lobortis ligula. Vestibulum tristique ultricies nulla, et consectetur sapien scelerisque id.</div>
                <div className="links">
                    Helpful links:
                    <br />
                    <Link to="/login" className="linkStyle">Login</Link>
                    <Link to="/education" className="linkStyle">Education</Link>
                    <Link to="/affiliates" className="linkStyle">Affiliates</Link>
                    <Link to="/myaccount" className="linkStyle">My Account</Link>
                    <Link to="/history" className="linkStyle">History</Link>
                </div>
            </HomeStyle>
        );
    }
}

const HomeStyle = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .greeting {
        align-self: center;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.5;
        width: 700px;
        background-color: yellow;
    }
    .about {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        width: 800px;
        background-color: yellow;
        margin-top: 40px;
        text-indent: 40px;
    }
    .links {
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        width: 700px;
        background-color: yellow;
        margin-top: 40px;
    }
    .linkStyle {
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        :active {
            color: grey;
        }
    }
`

export default Home;