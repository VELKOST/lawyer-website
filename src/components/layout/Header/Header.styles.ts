import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'; // Изменим импорт

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    //height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    
`;

export const LogoBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 85px;

    img {
        width: 64px;
        height: 64px;
        object-fit: contain;
    }
`;

export const LogoText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    margin: 0;
`;

export const NavBlock = styled.nav`
    display: flex;
    gap: 90px;
    flex-grow: 1;
    justify-content: flex-end;
    padding-right: 100px;
`;

// Исправляем типизацию для NavLink
export const NavLink = styled(ScrollLink)`
    font-family: ${({ theme }) => theme.fonts.main};
    color: #000000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 0;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #2c3e50;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }

    &.active {
        &:after {
            width: 100%;
        }
    }
`;