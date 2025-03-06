import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaTags: React.FC = () => {
    return (
        <Helmet>
            <title>Адвокатский кабинет | Юридические услуги</title>
            <meta name="description" content="Профессиональная юридическая помощь. Опытный адвокат, бесплатная консультация, защита ваших прав." />
            <meta name="keywords" content="адвокат, юрист, юридические услуги, правовая помощь" />
            <meta property="og:title" content="Адвокатский кабинет | Юридические услуги" />
            <meta property="og:description" content="Профессиональная юридическая помощь" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://your-domain.com" />
            <link rel="canonical" href="https://your-domain.com" />
        </Helmet>
    );
};