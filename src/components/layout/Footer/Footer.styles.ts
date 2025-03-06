import styled, { keyframes } from 'styled-components';

const BREAKPOINTS = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px'
};

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #000000;
    padding: clamp(30px, 4vw, 40px) 0;
    margin-top: auto;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
                to right,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
        );
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: ${BREAKPOINTS.desktop};
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    box-sizing: border-box;
    gap: clamp(20px, 4vw, 40px);
    animation: ${fadeIn} 0.6s ease-out forwards;

    @media (max-width: ${BREAKPOINTS.laptop}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: clamp(15px, 3vw, 25px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 0 15px;
    }
`;

export const Copyright = styled.div`
    color: #ffffff;
    font-size: clamp(14px, 1.6vw, 16px);
    flex-shrink: 0;
    text-align: left;
    position: relative;
    padding: clamp(10px, 2vw, 15px);
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: ${BREAKPOINTS.laptop}) {
        text-align: center;
        max-width: 100%;
        padding: clamp(5px, 1.5vw, 10px);
    }
`;

export const LegalText = styled.div`
    color: #ffffff;
    font-size: clamp(12px, 1.4vw, 14px);
    line-height: 1.6;
    opacity: 0.8;
    text-align: right;
    max-width: 800px;
    padding: clamp(10px, 2vw, 15px);
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.03);

    &:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: ${BREAKPOINTS.laptop}) {
        text-align: center;
        max-width: 100%;
        padding: clamp(8px, 1.5vw, 12px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 12px;
        line-height: 1.5;
    }
`;