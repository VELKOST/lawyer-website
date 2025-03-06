
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
export const CategoriesSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 120px clamp(20px, 5vw, 80px); // Увеличили padding с 80px до 120px
    position: relative;
    z-index: 2;
`;

export const CategoriesTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(24px, 3vw, 36px);
    text-align: left;
    margin-bottom: 60px;
    color: white;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const CategoryCard = styled.div`
    position: relative;
    aspect-ratio: 5/3;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05); // Добавляем светлую тень
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05); // Добавляем легкий светлый фон
    border: 1px solid rgba(255, 255, 255, 0.1); // Добавляем тонкую светлую рамку

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1); // Усиливаем тень при наведении
        border-color: rgba(255, 255, 255, 0.2); // Делаем рамку более заметной при наведении
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.6)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const CardTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: clamp(18px, 2vw, 24px);
    color: white;
    text-align: center;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CategoriesWrapper = styled.div`
    width: 100%;
    background-color: #03232a;
    margin-top: 60px;
`;