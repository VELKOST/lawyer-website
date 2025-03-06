import React, { useState, useEffect } from 'react';
import {
    QuoteSection,
    QuoteLeft,
    QuoteRight,
    QuoteText,
    QuoteLine,
    QuoteImage
} from './Quote.styles';

export const Quote: React.FC = () => {
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

        const element = document.querySelector('.quote-section');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <QuoteSection className="quote-section">
            <QuoteLeft>
                <QuoteLine />
                <QuoteText>
                    "Не так cтрашен закон, как его толкуют"
                </QuoteText>
                <QuoteLine />
            </QuoteLeft>
            <QuoteRight>
                <QuoteImage
                    src="/assets/images/lawyer-office.webp"
                    alt="Юридический офис"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                        opacity: imageLoaded ? 1 : 0,
                        transform: `scale(${imageLoaded ? 1 : 1.05})`,
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                    }}
                />
            </QuoteRight>
        </QuoteSection>
    );
};