import styled from 'styled-components';

// Константы для брейкпоинтов
const BREAKPOINTS = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px'
};

export const AboutSection = styled.section`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 80px);
    max-width: ${BREAKPOINTS.desktop};
    margin: 0 auto;
    position: relative;
    z-index: 1;
    gap: clamp(30px, 4vw, 60px);

    @media (max-width: ${BREAKPOINTS.tablet}) {
        flex-direction: column;
        height: auto;
        padding: clamp(30px, 5vw, 50px) clamp(15px, 4vw, 30px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 30px 15px;
        gap: 20px;
    }
`;

export const AboutContent = styled.div`
    flex: 1;
    max-width: 800px;
    padding-right: clamp(20px, 4vw, 60px);

    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: 100%;
        padding-right: 0;
        margin-bottom: clamp(20px, 4vw, 40px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        margin-bottom: 20px;
    }
`;

export const AboutTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(28px, 3.5vw, 42px);
    color: black;
    margin-bottom: clamp(16px, 3vw, 32px);
    text-align: left;
    line-height: 1.2;

    span {
        display: block;
        margin-top: 0.3em;
        font-size: 0.9em;
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: clamp(24px, 5vw, 32px);
        margin-bottom: 20px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 22px;

        span {
            margin-top: 0.2em;
        }
    }
`;

export const AboutText = styled.div`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: clamp(16px, 1.8vw, 18px);
    line-height: 1.6;
    color: black;
    text-align: left;

    p {
        margin: 0;

        & + p {
            margin-top: clamp(12px, 2.5vw, 24px);
        }
    }

    @media (max-width: ${BREAKPOINTS.laptop}) {
        font-size: clamp(15px, 1.6vw, 17px);
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        font-size: 16px;

        p + p {
            margin-top: 16px;
        }
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 15px;
        line-height: 1.5;

        p + p {
            margin-top: 12px;
        }
    }
`;

export const AboutImageWrapper = styled.div`
    width: clamp(280px, 30%, 400px);
    height: clamp(280px, 30vw, 400px);
    position: relative;
    flex-shrink: 0;

    @media (max-width: ${BREAKPOINTS.laptop}) {
        width: clamp(250px, 35%, 350px);
        height: clamp(250px, 35vw, 350px);
    }

    @media (max-width: ${BREAKPOINTS.tablet}) {
        width: clamp(220px, 60%, 300px);
        height: clamp(220px, 60vw, 300px);
        margin: 0 auto;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        width: 100%;
        height: clamp(200px, 80vw, 280px);
    }
`;

export const AboutImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    transition: transform 0.3s ease;


`;