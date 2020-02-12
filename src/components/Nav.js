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
    render() {
        return (
            <NavStyle>
                <Title>Title!</Title>
                <Buttons>
                    <Link to="/home"><Button1>Home</Button1></Link>
                    <Link to="/education"><Button1>Education</Button1></Link>
                    <Link to="/affiliates"><Button1>Affiliates</Button1></Link>
                    <Link to="/history"><Button1>History</Button1></Link>
                    <Link to="/myaccount"><Button1>My Account</Button1></Link>
                    <Link to="/"><Button1>Log Out</Button1></Link>
                    <div></div>
                </Buttons>
            </NavStyle>
        );
    }
}
const NavStyle = styled.div`
    height: 100vh;
    width: 200px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    margin-top: 30px;
    font-size: 40px;
    font-weight: 500;
    margin-left: 15px;
`
const Buttons = styled.div`
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