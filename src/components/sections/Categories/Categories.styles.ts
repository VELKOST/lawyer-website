import styled, { keyframes } from 'styled-components';

const BREAKPOINTS = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px'
};

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

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const CategoriesWrapper = styled.div`
    width: 100%;
    background-color: #03232a;
    margin-top: 60px;
    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        margin-top: 40px;
    }
`;

export const CategoriesSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${BREAKPOINTS.desktop};
    margin: 0 auto;
    padding: clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px);
    position: relative;
    z-index: 2;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        padding: clamp(40px, 6vw, 60px) clamp(15px, 4vw, 30px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 30px 15px;
    }
`;

export const CategoriesTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(24px, 3.5vw, 36px);
    text-align: left;
    margin-bottom: clamp(40px, 6vw, 60px);
    color: white;
    animation: ${fadeInUp} 0.6s ease-out forwards;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        margin-bottom: 30px;
        text-align: center;
    }
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(20px, 3vw, 30px);
    width: 100%;

    @media (max-width: ${BREAKPOINTS.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        gap: 20px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
        gap: 25px;
    }
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
    padding: clamp(15px, 3vw, 25px);
    transition: all 0.5s ease; // Увеличили время перехода и добавили all
`;


export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease; // Увеличили время перехода и добавили all
    transform: scale(1);
    filter: brightness(1);
`;

export const CardTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: clamp(16px, 2vw, 24px);
    color: white;
    text-align: center;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease; // Увеличили время перехода
    padding: 0 10px;
    transform: translateY(0);

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 18px;
    }
`;

export const CategoryCard = styled.div`
    position: relative;
    aspect-ratio: 5/3;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);

        ${CardImage} {
            
            filter: brightness(1.1); // Немного осветляем изображение
        }

        ${CardOverlay} {
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.7)
            );
        }

        ${CardTitle} {
            transform: translateY(-2px); // Добавляем легкую анимацию для заголовка
        }
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        aspect-ratio: 16/9;
    }
`;
