import React from 'react';
import { Link } from 'react-scroll';
import { HeaderContainer, LogoBlock, Logo, LogoText, NavBlock, NavLink } from './Header.styles';
// Импортируем иконку
import logoIcon from '../../../utils/logo.svg'; // Измените путь в соответствии с вашей структурой

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LogoBlock>
                <Logo>
                    <img src={logoIcon} alt="Логотип" />
                </Logo>
                <LogoText>Адвокат Подъячев</LogoText>
            </LogoBlock>

            <NavBlock>
                <NavLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    spyThrottle={500}
                    isDynamic={true}
                >
                    Обо мне
                </NavLink>
                <NavLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    activeClass="active"
                    spyThrottle={500}
                    isDynamic={true}
                >
                    Юридическая помощь
                </NavLink>
                <NavLink
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    activeClass="active"
                    spyThrottle={500}
                    isDynamic={true}
                >
                    Контакты
                </NavLink>
            </NavBlock>
        </HeaderContainer>
    );
};