import styled, { keyframes } from 'styled-components';

// Константы для брейкпоинтов
const BREAKPOINTS = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
};

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const QuoteSection = styled.section`
    display: flex;
    width: 100%;
    height: 50vw;
    margin-top: 94px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        flex-direction: column;
        height: auto;
        margin-top: 70px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        margin-top: 50px;
    }
`;

export const QuoteLeft = styled.div`
    width: 50%;
    background-color: #03232A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(20px, 5vw, 40px);

    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: 100%;
        aspect-ratio: 1;
        padding: clamp(15px, 4vw, 30px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        aspect-ratio: 4/3; // Немного уменьшаем высоту для мобильных
        padding: 15px;
    }
`;

export const QuoteLine = styled.div`
    width: 60%;
    height: 1px;
    background-color: #FFFFFF;
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-out forwards;

    &:first-of-type {
        animation-delay: 0.2s;
    }

    &:last-of-type {
        animation-delay: 0.4s;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: 80%;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        width: 90%;
    }
`;

export const QuoteText = styled.blockquote`
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: #FFFFFF;
    text-align: center;
    font-size: clamp(20px, 3vw, 36px);
    margin: clamp(20px, 4vw, 40px) 0;
    line-height: 1.4;
    padding: 0 20px;
    max-width: 80%;
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-out 0.3s forwards;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: clamp(18px, 5vw, 24px);
        margin: clamp(15px, 3vw, 30px) 0;
        padding: 0 15px;
        max-width: 90%;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: clamp(16px, 4.5vw, 20px);
        margin: clamp(10px, 2.5vw, 20px) 0;
        padding: 0 10px;
        line-height: 1.3;
    }
`;

export const QuoteRight = styled.div`
    width: 50%;
    position: relative;
    overflow: hidden; // Добавляем для предотвращения выхода изображения за границы

    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: 100%;
        aspect-ratio: 1;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        aspect-ratio: 3/4; // Делаем изображение выше на мобильных
    }
`;

export const QuoteImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: opacity 0.5s ease-in-out;
    
    @media (max-width: ${BREAKPOINTS.tablet}) {
        object-position: top center; // Фокусируем на верхней части изображения
    }
`;