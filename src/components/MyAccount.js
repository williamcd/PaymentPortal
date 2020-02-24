import React, { Component } from 'react';
import styled from 'styled-components';

class MyAccount extends Component {
    render() {
        return (
            <UserData>
                Personal Info
                <br />

                <DataDiv>
                    <Data>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Password</div>
                        <div>Phone</div>
                        <div>Payment info</div>
                    </Data>
                    <InputDiv>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                    </InputDiv>
                </DataDiv>
            </UserData>
        );
    }
}

const UserData = styled.div`
    width: calc(100vw - 200px);
    height: 65%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const InputDiv = styled.div`
    width: 50%;
    input {
        height: 30px;
        width: 100%;
        padding-left: 10px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Data = styled.div`
    width: 20%;
    /* border-right: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const DataDiv = styled.div`
    width: 70%;
    max-width: 600px;
    border: 1px solid grey;
    padding-left: 30px;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export default MyAccount;