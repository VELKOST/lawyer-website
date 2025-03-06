import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Header } from './components/layout/Header';
import { Categories } from './components/sections/Categories';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Quote } from './components/sections/Quote';
import { Footer } from './components/layout/Footer';
import { MetaTags } from './components/SEO/MetaTags';
import { SchemaMarkup } from './components/SEO/SchemaMarkup';

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
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default App;