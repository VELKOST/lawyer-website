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
                                <ContactItem href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                                    </svg>
                                    Московская обл., г. Орехово-Зуево, ул. Ленина, д. 99
                                </ContactItem>
                                <ContactItem href="tel:+79011051055">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                                    </svg>
                                    +7 (901) 105 105 5
                                </ContactItem>
                                <ContactItem href="mailto:advocatq@mail.ru">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                                    </svg>
                                    advocatq@mail.ru
                                </ContactItem>
                            </ContactGroup>

                            <ContactGroup>
                                <ContactItem href="https://t.me/yourname">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="currentColor"/>
                                    </svg>
                                    Telegram
                                </ContactItem>
                                <ContactItem href="https://wa.me/79011051055">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="currentColor"/>
                                    </svg>
                                    WhatsApp
                                </ContactItem>
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