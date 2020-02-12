import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/education">Education</Link>
                <Link to="/affiliates">Affiliates</Link>
                <Link to="/history">History</Link>
                <Link to="/myaccount">My Account</Link>
                <Link to="/">Log Out</Link>
            </div>
        );
    }
}

export default Nav;