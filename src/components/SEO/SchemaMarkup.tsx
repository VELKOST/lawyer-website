import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaMarkupProps {
    organizationName?: string;
    description?: string;
    logo?: string;
    address?: {
        street: string;
        city: string;
        postalCode: string;
        region?: string;
    };
    telephone?: string;
    email?: string;
    openingHours?: string[];
    priceRange?: string;
    images?: string[];
    sameAs?: string[]; // социальные сети и другие профили
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
                                                              organizationName = 'Адвокатский кабинет',
                                                              description = 'Профессиональная юридическая помощь и защита ваших прав',
                                                              logo = 'https://your-domain.com/logo.png',
                                                              address = {
                                                                  street: 'ул. Примерная, 123',
                                                                  city: 'Москва',
                                                                  postalCode: '123456',
                                                                  region: 'Московская область'
                                                              },
                                                              telephone = '+7 (900) 123-45-67',
                                                              email = 'info@your-domain.com',
                                                              openingHours = [
                                                                  'Mo-Fr 09:00-18:00',
                                                                  'Sa 10:00-15:00'
                                                              ],
                                                              priceRange = '₽₽₽',
                                                              images = ['https://your-domain.com/office.jpg'],
                                                              sameAs = [
                                                                  'https://facebook.com/your-page',
                                                                  'https://vk.com/your-page'
                                                              ]
                                                          }) => {
    // Основная схема для юридической организации
    const legalServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: organizationName,
        description: description,
        url: 'https://your-domain.com',
        logo: {
            '@type': 'ImageObject',
            url: logo
        },
        image: images,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address.street,
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressRegion: address.region,
            addressCountry: 'RU'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '55.755826', // Замените на реальные координаты
            longitude: '37.617300'
        },
        telephone: telephone,
        email: email,
        openingHours: openingHours,
        priceRange: priceRange,
        sameAs: sameAs,
        // Дополнительные данные для юридической фирмы
        serviceType: [
            'Юридические консультации',
            'Представительство в суде',
            'Составление документов'
        ],
        areaServed: {
            '@type': 'State',
            name: 'Московская область'
        },
        // Рейтинг и отзывы
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '120'
        },
        // Предлагаемые услуги
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Юридические услуги',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Юридическая консультация',
                        description: 'Профессиональная консультация по правовым вопросам'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Представительство в суде',
                        description: 'Защита интересов клиента в судебных инстанциях'
                    }
                }
            ]
        }
    };

    // Дополнительная схема для локального бизнеса
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: organizationName,
        image: images,
        '@id': 'https://your-domain.com',
        url: 'https://your-domain.com',
        telephone: telephone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: address.street,
            addressLocality: address.city,
            postalCode: address.postalCode,
            addressRegion: address.region,
            addressCountry: 'RU'
        },
        openingHoursSpecification: openingHours.map(hours => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: hours.split(' ')[0],
            opens: hours.split(' ')[1].split('-')[0],
            closes: hours.split(' ')[1].split('-')[1]
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(legalServiceSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </Helmet>
    );
};

// Пример использования:
/*
<SchemaMarkup
  organizationName="Адвокатский кабинет Иванова"
  description="Профессиональная юридическая помощь в Москве"
  address={{
    street: "ул. Ленина, 1",
    city: "Москва",
    postalCode: "123456",
    region: "Московская область"
  }}
  telephone="+7 (900) 123-45-67"
  email="info@advocate.com"
  openingHours={[
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-15:00"
  ]}
  sameAs={[
    "https://facebook.com/advocate",
    "https://vk.com/advocate"
  ]}
/>
*/