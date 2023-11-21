import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const EmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Введите email</label>
                <input
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Некорректный email'
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="submit" value="Получить URL"/>
            </form>
        </div>
    );
};

export default EmailForm;
