import React, { useState } from 'react';
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

    return (
        <QuoteSection>
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
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                />
            </QuoteRight>
        </QuoteSection>
    );
};