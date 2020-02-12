import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

class Nav extends Component {
    state = {
        loggedIn: true,
        hamburger: false,
    }
    hamburger = () => {
        this.setState({ hamburger: !this.state.hamburger })
    }
    componentDidMount() {
        console.log(window.location.pathname);
    }
    login = () => {
        this.setState({ loggedIn: true })
    }
    render() {
        return (
            <NavStyle>
                <Title>Title!</Title>
                {this.state.loggedIn ? 
                <Buttons>
                    <Link to="/home"><Button1>Home</Button1></Link>
                    <Link to="/education"><Button1>Education</Button1></Link>
                    <Link to="/affiliates"><Button1>Affiliates</Button1></Link>
                    <Link to="/history"><Button1>History</Button1></Link>
                    <Link to="/myaccount"><Button1>My Account</Button1></Link>
                    <Link to="/login"><Button1>Log Out</Button1></Link>
                    <div></div>
                </Buttons> 
                : <WelcomeMessage>Login to get started</WelcomeMessage>}
            </NavStyle>
        );
    }
}
const NavStyle = styled.div`
    height: 100vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    border-right: 1px solid black;
`
const WelcomeMessage = styled.div`
    margin-top: 30px;
`
const Title = styled.div`
    margin-top: 30px;
    font-size: 40px;
    font-weight: 500;
    margin-left: 15px;
`
const Buttons = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    /* background-color: #cdcdcd; */
    display: flex;
    flex-direction: column;
`
const Button1 = styled.button`
    height: 60px;
    /* colors */
    color: black;
    font-size: 12px;
    background: none;
    /* border */
    border: none;
    outline: none;
    transition: color 0.5s ease;
    /* animations */
    &:hover {
        color: tomato;
    }
    &:active {
        color: red;
    }
`

export default Nav;