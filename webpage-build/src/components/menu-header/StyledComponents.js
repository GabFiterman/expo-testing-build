import styled from 'styled-components';

export const MenuHeaderNav = styled.nav`
    background-color: #414141;
    color: #cccccc;
    position: fixed;
    width: 100%;
    height: 5vh;
    z-index: 99999;
    top: 0;
    padding-top: 2rem;
`;

export const MenuUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding-bottom: 0.05em;
    position: relative;
    width: 80%;
    margin: 0 auto;

    & li > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: none;
        outline: none;
    }

    .activeLink {
        padding-bottom: 0.2em;
        position: relative;
    }

    .activeLink::after {
        border-bottom: 0.2em solid #ffff00;
        bottom: 0;
        content: '';
        left: -10%;
        position: absolute;
        width: 120%;
    }
`;
