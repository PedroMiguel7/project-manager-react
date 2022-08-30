import styled from "styled-components";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";

// Fixed
export const FixedNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0; 
    background-color: #191A23;
    height: 100vh;
    box-shadow: 0 30px 60px rgb(0, 0, 0, 0.3);
    min-width: 60px;
    z-index: 5;

    @media(max-width: 992px) {
        display: none;
    }
`;

export const Logo = styled.img`
    max-width: 2.2rem;
    margin-top: -4rem;
    margin-bottom: 5rem;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavItem = styled.li`
    transition: 0.3s;
    cursor: pointer;
    //align-self: flex-start;

    &:hover {
        opacity: 0.85;
        transition: all 0.3s ease-in-out;
    }
`;

export const NavLink = styled(Link)`
    color: #87888C;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 0.95rem;
    gap: 0.8rem;

    &:hover {
        color: #87888C;
        text-decoration: none;
    }
`;

export const FixedNavLink = styled(Link)`
    color: #87888C;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 0.95rem;
    gap: 0.8rem;
    width: 25px;

    &:hover {
        color: #87888C;
        text-decoration: none;
        width: 80px;
        transition: width 0.5s ease-in-out;
    }
`;

export const ItemName = styled.span`
    
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    ${FixedNavLink}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

// Temporary

export const TemporaryNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #191A23;
    height: 100vh;
    box-shadow: 0 30px 60px rgb(0, 0, 0, 0.3);
    min-width: 60px;
    z-index: 5;
    width: 200px;

    @media(min-width: 992px) {
        display: none;
    }
`;

export const TemporaryLogo = styled.img`
    max-width: 1.7rem;
    margin-top: -4rem;
`;

// Drawer 

export const Drawer = styled(SwipeableDrawer)`
    @media(min-width: 992px) {
        display: none;
    }
`;

export const MenuContainer = styled.div`
    padding: 0 3.5%;
    
    @media(min-width: 992px) {
        display: none;
    }
`;