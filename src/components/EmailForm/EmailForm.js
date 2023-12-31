import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const testEmailUrl = `https://bc.okonti.ru/api/email-search/?email=${email}`

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(testEmailUrl)
                setSuccess(true)
            } catch (error) {
                navigate("/404")
                console.error('Error:', error);
            }
        }

        if (email) {
            fetchData().then(r => r);
        }
    }, [email])


    const onSubmit = (data) => {
        setEmail(data.email)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mainForm">
            <label>{success ? <div>Email успешно отправлен!</div> : <div>Введите email</div>}</label>
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
    );
};

export default EmailForm;
