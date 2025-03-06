import styled from 'styled-components';

export const ContactWrapper = styled.div`
    width: 100%;
    background-color: #03232a;
`;

export const ContactSection = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 120px clamp(20px, 5vw, 80px);
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 600px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 1024px) {
        min-height: 400px;
    }
`;

export const ContactImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    color: white;
    padding: 20px;
`;

export const ContactTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: clamp(24px, 3vw, 40px);
    margin-bottom: 40px;
    color: white;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ContactGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: white;
    text-decoration: none;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    svg {
        width: 24px;
        height: 24px;
        color: white;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
`;