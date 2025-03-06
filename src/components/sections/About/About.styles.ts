import styled from 'styled-components';

export const AboutSection = styled.section`
    display: flex;
    width: 100%;
    height: 50vw;
    align-items: center;
    justify-content: center;
    padding: 0 clamp(20px, 5vw, 80px);
    max-width: 1440px;
    margin: 0 auto;
    min-height: 100vh; // Добавляем минимальную высоту
    position: relative; // Добавляем позиционирование
    z-index: 1; // Добавляем z-index
    

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px);
    }
`;

// Добавим обертку для всего контента
export const AboutWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px; // Ограничиваем максимальную ширину контента
    justify-content: space-between; // Распределяем пространство между контентом
    align-items: center;
    gap: 40px; // Отступ между текстом и изображением

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
`;

export const AboutContent = styled.div`
    width: 70%;
    padding-right: clamp(20px, 5vw, 60px);

    @media (max-width: 768px) {
        width: 100%;
        padding-right: 0;
        margin-bottom: 40px;
    }
`;

export const AboutTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(28px, 4vw, 42px);
    color: black;
    margin-bottom: clamp(16px, 3vw, 24px);
    text-align: left;

    span {
        display: block;
    }

    @media (max-width: 768px) {
        font-size: clamp(24px, 6vw, 32px);
    }
`;

export const AboutText = styled.div`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.6;
    color: black;
    text-align: left;

    p + p {
        margin-top: clamp(12px, 2vw, 16px);
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const AboutImageWrapper = styled.div`
    width: 25%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    max-width: 400px;
    max-height: 400px;

    @media (max-width: 768px) {
        width: 100%;
        height: 60vw;
    }
`;

export const AboutImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: center;

    @media (max-width: 768px) {
        height: 100%;
    }
`;