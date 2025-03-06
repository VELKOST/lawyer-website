import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

// Добавим константы для брейкпоинтов
const BREAKPOINTS = {
    mobile: '768px',
    tablet: '1024px',
};

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    z-index: 1000;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 10px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export const LogoBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        margin-bottom: 10px;
    }
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

    @media (max-width: ${BREAKPOINTS.tablet}) {
        margin-left: 20px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        margin-left: 0;

        img {
            width: 48px;
            height: 48px;
        }
    }
`;

export const LogoText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: 24px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 20px;
    }
`;

export const NavBlock = styled.nav`
    display: flex;
    gap: 90px;
    flex-grow: 1;
    justify-content: flex-end;
    padding-right: 100px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        gap: 40px;
        padding-right: 20px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        flex-direction: column;
        gap: 15px;
        padding-right: 0;
        align-items: center;
    }
`;

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

    &.active:after {
        width: 100%;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: 18px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 16px;
    }
`;

// Добавляем компонент для мобильного меню
export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        display: none; // Пока скрыто, может быть реализовано позже
    }
`;