import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #000000;
    padding: 40px 0;
    margin-top: auto;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 0 40px; // Фиксированный отступ от края экрана
    box-sizing: border-box;
    gap: 40px; // Минимальный промежуток между элементами

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Copyright = styled.div`
    color: #ffffff;
    font-size: 16px;
    flex-shrink: 0;
    text-align: left;

    @media (max-width: 1024px) {
        text-align: center;
        max-width: 100%;
    }
`;

export const LegalText = styled.div`
    color: #ffffff;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.8;
    text-align: right;
    max-width: 800px; // Ограничиваем ширину правого блока

    @media (max-width: 1024px) {
        text-align: center;
        max-width: 100%;
    }
`;