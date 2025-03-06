import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global.styles';
import { theme } from '@styles/theme';
import { Header } from '@components/layout/Header';
import { Categories } from '@components/sections/Categories';
import { About } from '@components/sections/About';
import { Contacts } from '@components/sections/Contacts';
import { Quote } from '@components/sections/Quote';
import { Footer } from '@components/layout/Footer';
import { MetaTags } from '@components/SEO/MetaTags';
import { SchemaMarkup } from '@components/SEO/SchemaMarkup';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MetaTags />
            <SchemaMarkup />
            <Header />
            <main>
                <Quote />
                <About />
                <Categories />
                <Contacts />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default App;