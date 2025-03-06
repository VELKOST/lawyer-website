export const theme = {
    colors: {
        primary: '#2B3674',
        secondary: '#A3AED0',
        accent: '#4318FF',
        background: '#FFFFFF',
        text: {
            primary: '#2B3674',
            secondary: '#A3AED0',
        },
        error: '#FF0000',
        success: '#00FF00',
    },
    fonts: {
        secondary: "'Philosopher', sans-serif",
        main: "'Source Sans Pro', sans-serif",
    },
    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        large: '1440px',
    },
    container: {
        width: '1200px',
        padding: '0 20px',
    },
};

export type Theme = typeof theme;