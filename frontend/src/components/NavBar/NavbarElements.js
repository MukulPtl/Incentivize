import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #6d76f7;
    height: 80px;
    display: flex;
    border-radius: 25px;
    /* justify-content: space-between; */
    /* padding: 0.5rem calc((100vw - 1000px) /2); */
    z-index: 10;

    margin: 10px;

    justify-content: flex-start;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 50%;
    cursor: pointer;

    border-radius: 4px;
    /* background: #256ce1; */
    /* border: none;
    outline: none; */
    transition: all 0.2s ease-in-out;

    &.active {
        /* color: #15cdfc; */
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`



export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position:absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */

    width: 100vw;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    /* margin-right: 24px; */
    

    justify-content: flex-end;
    width: 70vw;


    @media screen and (max-width 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const NavLogo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;


    border-radius: 4px;
    /* background: #256ce1; */
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        
    }
`