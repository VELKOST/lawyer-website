import React, { useState, useEffect } from 'react';
import {
    CategoriesWrapper,
    CategoriesSection,
    CategoriesTitle,
    CardsGrid,
    CategoryCard,
    CardImage,
    CardOverlay,
    CardTitle
} from './Categories.styles';

const categories = [
    {
        id: 1,
        title: 'Гражданские дела',
        image: '/assets/images/criminal-law.webp'
    },
    {
        id: 2,
        title: 'Жилищные споры',
        image: '/assets/images/civil-law.webp'
    },
    {
        id: 3,
        title: 'Уголовные дела',
        image: '/assets/images/administrative-law.webp'
    },
    {
        id: 4,
        title: 'Наследственное право',
        image: '/assets/images/arbitration.webp'
    },
    {
        id: 5,
        title: 'Споры с органами власти',
        image: '/assets/images/family-law.webp'
    },
    {
        id: 6,
        title: 'Абонентское обслуживание',
        image: '/assets/images/inheritance-law.webp'
    }
];

export const Categories: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loadedImages, setLoadedImages] = useState<number[]>([]);

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

        const element = document.getElementById('services');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const handleImageLoad = (id: number) => {
        setLoadedImages(prev => [...prev, id]);
    };

    return (
        <CategoriesWrapper>
            <CategoriesSection id="services">
                <CategoriesTitle>
                    Сферы моей практики
                </CategoriesTitle>
                <CardsGrid>
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={category.id}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? 'translateY(0)'
                                    : 'translateY(30px)',
                                transition: `opacity 0.6s ease-out ${index * 0.15}s, 
                                           transform 0.6s ease-out ${index * 0.15}s`
                            }}
                        >
                            <CardImage
                                src={category.image}
                                alt={category.title}
                                onLoad={() => handleImageLoad(category.id)}
                                style={{
                                    opacity: loadedImages.includes(category.id) ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            />
                            <CardOverlay>
                                <CardTitle>{category.title}</CardTitle>
                            </CardOverlay>
                        </CategoryCard>
                    ))}
                </CardsGrid>
            </CategoriesSection>
        </CategoriesWrapper>
    );
};