import React, { useEffect, useState } from 'react';
import {
    FooterWrapper,
    FooterContainer,
    Copyright,
    LegalText
} from './Footer.styles';

export const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        const element = document.querySelector('footer');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <FooterWrapper>
            <FooterContainer
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? '0' : '10px'})`,
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
            >
                <Copyright>
                    © {currentYear} Официальный сайт адвоката Подъячева Виталия Олеговича
                </Copyright>
                <LegalText>
                    Перепечатка, а также иное использование информации и текстов
                    с данного сайта - запрещены без получения письменного согласия
                    адвоката. Размещенная информация и тексты на сайте не носят
                    рекламный характер.
                </LegalText>
            </FooterContainer>
        </FooterWrapper>
    );
};