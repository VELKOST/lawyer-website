import React, { useState, useEffect } from 'react';
import {
    AboutSection,
    AboutContent,
    AboutTitle,
    AboutText,
    AboutImageWrapper,
    AboutImage
} from './About.styles';

export const About: React.FC = () => {
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

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <AboutSection
            id="about"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            <AboutContent>
                <AboutTitle>
                    Адвокат
                    <span>Подъячев Виталий Олегович</span>
                </AboutTitle>
                <AboutText>
                    <p>
                        Подъячев В. О. – профессиональный адвокат, специализирующийся на предоставлении
                        квалифицированной юридической помощи как частным лицам, так и организациям всех форм собственности.
                        Адвокат гарантирует индивидуальный подход к каждому клиенту и его правовой ситуации.
                    </p>
                    <p>
                        За более чем 20-летний опыт профессиональной юридической практики, включая 6 лет в адвокатуре,
                        успешно решаются правовые задачи любой сложности, от консультаций до представительства в суде.
                        Многолетний опыт и профессионализм – это ваша уверенность в надежной правовой защите.
                    </p>
                </AboutText>
            </AboutContent>
            <AboutImageWrapper>
                <AboutImage
                    src="/assets/images/about-lawyer.webp"
                    alt="Профессиональный юрист за работой"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            </AboutImageWrapper>
        </AboutSection>
    );
};