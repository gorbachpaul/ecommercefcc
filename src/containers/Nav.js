import React, {Component} from 'react';
import {Container, Nav, NavItem, NavLink,Navbar } from 'reactstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar color="faded">
            <Container>
                <Nav>
                    <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink tag={Link} to="/blog">Blog</NavLink></NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation