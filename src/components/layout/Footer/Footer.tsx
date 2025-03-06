import React from 'react';
import {
    FooterWrapper,
    FooterContainer,
    Copyright,
    LegalText
} from './Footer.styles';

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Copyright>
                    ©Официальный сайт адвоката Подъячева Виталия Олеговича
                </Copyright>
                <LegalText>
                    Перепечатка, а также иное использование информации и текстов с данного сайта - запрещены без получения письменного согласия адвоката. Размещенная информация и тексты на сайте не носят рекламный характер.
                </LegalText>
            </FooterContainer>
        </FooterWrapper>
    );
};