import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
                                                      title = 'Адвокатский кабинет | Юридические услуги',
                                                      description = 'Профессиональная юридическая помощь. Опытный адвокат, бесплатная консультация, защита ваших прав.',
                                                      keywords = 'адвокат, юрист, юридические услуги, правовая помощь',
                                                      canonicalUrl = 'https://your-domain.com'
                                                  }) => {
    return (
        <Helmet>
            {/* Основные мета-теги */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph теги */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />

            {/* Канонический URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Дополнительные мета-теги */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Russian" />

            {/* Favicon */}
            {/*<link rel="icon" type="image/x-icon" href="/favicon.ico" />*/}
        </Helmet>
    );
};