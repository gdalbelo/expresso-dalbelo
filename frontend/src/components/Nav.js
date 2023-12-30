import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = () => {
    const menuOptions = {
        title: 'Expresso Dal Belo',
        about: 'Sobre Nós',
        frete: 'Frete',
        contact: 'Contacte nos'
    }
    return (
        <StyledNav>
            <div><Link to="/">{menuOptions.title}</Link></div>
            <ul>
                <li><Link to="/">{menuOptions.about}</Link></li>
                <li><Link to="/frete">{menuOptions.frete}</Link></li>
                <li><Link to="/contactus">{menuOptions.contact}</Link></li>
            </ul>
        </StyledNav>    
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

export default Nav;