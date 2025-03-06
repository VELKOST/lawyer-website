import React, { useState } from 'react';
import { HeaderWrapper, Logo, Nav, MenuButton } from './Header.styles';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Logo href="/">Адвокат</Logo>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
            </MenuButton>
            <Nav isOpen={isMenuOpen}>
                <a href="#services">Услуги</a>
                <a href="#about">О нас</a>
                <a href="#cases">Кейсы</a>
                <a href="#reviews">Отзывы</a>
                <a href="#contact">Контакты</a>
            </Nav>
        </HeaderWrapper>
    );
};