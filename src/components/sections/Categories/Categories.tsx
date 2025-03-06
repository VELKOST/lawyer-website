import React from 'react';
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
    return (
        <CategoriesWrapper>
            <CategoriesSection id="services">
                <CategoriesTitle>
                    Сферы моей практики
                </CategoriesTitle>
                <CardsGrid>
                    {categories.map((category) => (
                        <CategoryCard key={category.id}>
                            <CardImage
                                src={category.image}
                                alt={category.title}
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