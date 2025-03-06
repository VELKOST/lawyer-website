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
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ContactWrapper = styled.div`
    width: 100%;
    background-color: #03232a;
`;

export const ContactSection = styled.section`
    max-width: ${BREAKPOINTS.desktop};
    margin: 0 auto;
    padding: clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px);

    @media (max-width: ${BREAKPOINTS.tablet}) {
        padding: clamp(40px, 6vw, 60px) clamp(15px, 4vw, 30px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 30px 15px;
    }
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(30px, 4vw, 60px);
    align-items: start;

    @media (max-width: ${BREAKPOINTS.laptop}) {
        grid-template-columns: 1fr;
        gap: clamp(30px, 5vw, 40px);
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: clamp(400px, 50vw, 600px);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.6s ease-out forwards;

    @media (max-width: ${BREAKPOINTS.laptop}) {
        min-height: clamp(300px, 40vw, 400px);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        min-height: 250px;
    }
`;

export const ContactImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const InfoContainer = styled.div`
    color: white;
    padding: clamp(15px, 2vw, 20px);
    animation: ${fadeIn} 0.6s ease-out 0.2s forwards;
    opacity: 0;
`;

export const ContactTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(24px, 3vw, 40px);
    margin-bottom: clamp(30px, 4vw, 40px);
    color: white;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        text-align: center;
        font-size: clamp(22px, 5vw, 28px);
        margin-bottom: 25px;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(25px, 3vw, 40px);
`;

export const ContactGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(15px, 2vw, 20px);
`;

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(16px, 1.8vw, 18px);
    color: white;
    text-decoration: none;
    padding: clamp(12px, 2vw, 16px) clamp(15px, 2vw, 20px);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    svg {
        width: 24px;
        height: 24px;
        color: white;
        flex-shrink: 0;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 15px;
        padding: 12px 15px;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    height: clamp(250px, 30vw, 300px);
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
    }
`;