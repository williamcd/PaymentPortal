import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Reset extends Component {
    render() {
        return (
            <AlignmentDiv>
                <Title>Enter your email and we'll send you a magic link to change your password</Title>
                <Inputs>
                    <Input1 placeholder="email"></Input1>
                </Inputs>
                <div className="buttons">
                    <Link to="/resetSuccess"><Button1>Send</Button1></Link>
                    <Link to="/login"><Button1>Cancel</Button1></Link>
                </div>
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
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
        width: 300px;
    }
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
    font-size: 20px;
    /* line-height: 25px; */
    font-weight: 500;
    width: 40%;
    margin-bottom: 20px;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 450px;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    height: 100px;
`
const Input1 = styled.input`
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

export default Reset;