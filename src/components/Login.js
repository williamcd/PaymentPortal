import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        // obviously don't actually do this
        email: "",
        password: "",
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state.email)
    };

    render() {
        return (
            <AlignmentDiv>
                <Inputs>
                    <Input1 placeholder="Email..." type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <Input1 placeholder="Password..." type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </Inputs>
                <Link to="/home"><Button1>Login</Button1></Link>
                <Link to="/reset"><Forgot>Forgot password?</Forgot></Link>
            </AlignmentDiv>
        );
    }
}

const AlignmentDiv = styled.div`
    height: 80vh;
    width: calc(100vw - 200px);
    margin-top: 10vh;
    align-self: center;
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
    justify-content: center;
    align-items: center;
`
const Button1 = styled.button`
    width: 100px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #ea214b;
    color: #FDFDFF;
    border: 2px solid #ea214b;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    transition: 0.2s ease;
    &:hover {
        color: #ea214b;
        background-color: #FDFDFF;
    };
    &:active {
        background-color: #065A82;
    }
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
`
const Input1 = styled.input`
    border-bottom: 1px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 8px;
    margin-bottom: 20px;
    font-size: 15px;
    width: 300px;
    &:focus {
        outline: none;
    }
`
const Forgot = styled.div`
    font-size: 13px;
`

export default Login;