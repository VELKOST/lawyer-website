import React from 'react';
import { useForm } from '@hooks/useForm';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { FormWrapper } from './Contact.styles';

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const { values, handleChange, handleSubmit } = useForm<FormData>({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        onSubmit: async (values) => {
            // Обработка отправки формы
            console.log(values);
        },
    });

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
            />
            <Input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Телефон"
                required
            />
            <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
            />
            <Input
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Сообщение"
                as="textarea"
            />
            <Button type="submit">Отправить</Button>
        </FormWrapper>
    );
};