import { css } from 'styled-components';
import { Theme } from './theme';

// Миксин для адаптивного контейнера
export const container = css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.container.padding};
`;

// Миксин для флекс-центрирования
export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Миксин для абсолютного позиционирования
export const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Миксин для медиа-запросов
export const media = {
    mobile: (styles: string) => css`
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            ${styles}
        }
    `,
    tablet: (styles: string) => css`
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            ${styles}
        }
    `,
    desktop: (styles: string) => css`
        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            ${styles}
        }
    `,
};

// Миксин для типографики
export const typography = {
    h1: css`
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;

      
    `,
    h2: css`
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.3;

       
    `,
    body: css`
        font-family: ${({ theme }) => theme.fonts.main};
        font-size: 1rem;
        line-height: 1.5;
    `,
};

// Миксин для теней
export const shadows = {
    small: css`
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `,
    medium: css`
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `,
    large: css`
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    `,
};

// Миксин для градиентов
export const gradients = {
    primary: css`
        background: linear-gradient(
                45deg,
                ${({ theme }) => theme.colors.primary},
                ${({ theme }) => theme.colors.accent}
        );
    `,
    secondary: css`
        background: linear-gradient(
                45deg,
                ${({ theme }) => theme.colors.secondary},
                ${({ theme }) => theme.colors.primary}
        );
    `,
};

// Миксин для анимаций
export const transitions = {
    default: css`
        transition: all 0.3s ease;
    `,
    slow: css`
        transition: all 0.5s ease;
    `,
    fast: css`
        transition: all 0.2s ease;
    `,
};