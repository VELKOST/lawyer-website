import React, { useEffect, useState } from 'react';
import {
    ContactWrapper,
    ContactSection,
    ContactContent,
    ImageContainer,
    ContactImage,
    InfoContainer,
    ContactTitle,
    ContactInfo,
    ContactItem,
    ContactGroup,
    MapContainer
} from './Contact.styles';

export const Contact: React.FC = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        const element = document.getElementById('contacts');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const loadYandexMap = () => {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU';
            script.async = true;

            script.onload = () => {
                // @ts-ignore
                ymaps.ready(() => {
                    try {
                        // @ts-ignore
                        const map = new ymaps.Map('map', {
                            center: [55.808697, 38.987610],
                            zoom: 16,
                            controls: ['zoomControl', 'fullscreenControl']
                        });

                        // @ts-ignore
                        const placemark = new ymaps.Placemark(
                            [55.808697, 38.987610],
                            {
                                balloonContent: 'Адвокатский кабинет'
                            },
                            {
                                preset: 'islands#redIcon'
                            }
                        );

                        map.geoObjects.add(placemark);
                        setIsMapLoaded(true);
                    } catch (error) {
                        console.error('Error initializing map:', error);
                    }
                });
            };

            script.onerror = () => {
                console.error('Error loading Yandex Maps');
            };

            document.body.appendChild(script);
        };

        loadYandexMap();

        return () => {
            const scriptElement = document.querySelector('script[src*="api-maps.yandex.ru"]');
            if (scriptElement && scriptElement.parentNode) {
                scriptElement.parentNode.removeChild(scriptElement);
            }
        };
    }, [isVisible]);

    return (
        <ContactWrapper>
            <ContactSection id="contacts">
                <ContactContent>
                    <ImageContainer
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: `translateY(${isVisible ? '0' : '20px'})`,
                            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                        }}
                    >
                        <ContactImage
                            src="/assets/images/lawyer-at-desk.webp"
                            alt="Адвокат за рабочим столом"
                            onLoad={() => setImageLoaded(true)}
                            style={{
                                opacity: imageLoaded ? 1 : 0,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                        />
                    </ImageContainer>
                    <InfoContainer
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: `translateY(${isVisible ? '0' : '20px'})`,
                            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                        }}
                    >
                        <ContactTitle>Контактная информация</ContactTitle>
                        <ContactInfo>
                            <ContactGroup>
                                {/* Контактные элементы остаются без изменений */}
                            </ContactGroup>

                            <MapContainer
                                id="map"
                                style={{
                                    opacity: isMapLoaded ? 1 : 0.6,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            />
                        </ContactInfo>
                    </InfoContainer>
                </ContactContent>
            </ContactSection>
        </ContactWrapper>
    );
};