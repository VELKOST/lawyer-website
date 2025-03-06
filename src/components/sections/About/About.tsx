import React from 'react';
import {
    AboutSection,
    AboutContent,
    AboutTitle,
    AboutText,
    AboutImageWrapper,
    AboutImage
} from './About.styles';

export const About: React.FC = () => {
    return (
        <AboutSection id="about">
            <AboutContent>
                <AboutTitle>
                    Адвокат
                    <span>Подъячев Виталий Олегович</span>
                </AboutTitle>
                <AboutText>
                    <p>
                        Подъячев В. О. – профессиональный адвокат, специализирующийся на предоставлении
                        квалифицированной юридической помощи
                        как частным лицам, так и организациям всех форм собственности. Адвокат гарантирует индивидуальный
                        подход к каждому клиенту и его правовой ситуации.
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
                />
            </AboutImageWrapper>
        </AboutSection>
    );
};