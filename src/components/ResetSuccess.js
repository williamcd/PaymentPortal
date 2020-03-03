import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

class ResetSuccess extends Component {
    render() {
        return (
            <ResetStyle>
                <div className="textStyle">Success! <br />We've sent a magic link to your email. <br />Follow the link to reset your password.</div>
                <div className="afterReset">After you're set a new password... <div className="spacer" /><Link className="button1" to="/login">Login here</Link></div>
            </ResetStyle>
        );
    }
}
const ResetStyle = styled.div`
    width: calc(100vw - 200px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .textStyle {
        font-size: 22px;
        width: 500px;
        text-align: center;
    }
    .afterReset {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
    }
    .spacer {
        width: 100px;
    }
    .button1 {
        background-color: #ea214b;
        color: #FDFDFF;
        border: 2px solid #ea214b;
        border-radius: 5px;
        padding: 5px;
        text-decoration: none;
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
    }
`

export default ResetSuccess;