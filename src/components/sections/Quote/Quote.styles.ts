
import styled, { keyframes } from 'styled-components';
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

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
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

    @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 1; // Квадратная форма на мобильных
    }
`;

export const QuoteLine = styled.div`
    width: 60%;
    height: 1px;
    background-color: #FFFFFF;

    @media (max-width: 768px) {
        width: 80%;
    }
    animation: ${fadeIn} 0.8s ease-out forwards;

    &:first-of-type {
        animation-delay: 0.2s;
    }

    &:last-of-type {
        animation-delay: 0.4s;
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

    @media (max-width: 768px) {
        font-size: clamp(18px, 5vw, 24px);
    }
`;

export const QuoteRight = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 1; // Квадратная форма на мобильных
    }
`;

export const QuoteImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;