import React from 'react';
import './style.css';
import {Controller, useForm} from "react-hook-form";

const MyForm = () => {

    const {register, handleSubmit, control, formState: { errors } } = useForm();

    return (
        <div className="container">
            <div className="text">
                Редактировать
            </div>
            <form action="src/components/Main/MyForm#" onSubmit={handleSubmit((data) => console.log(data))}>

                <div className="formRow">
                    <div className="inputData">
                        <label htmlFor="">Фото</label>
                        <Controller
                            name="file"
                            control={control}
                            render={({ field }) => (
                                <input type="file" {...field} />
                            )}
                        />
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('name')}/>
                        <div className="underline" />
                        <label htmlFor="">Имя</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('surname')}/>
                        <div className="underline" />
                        <label htmlFor="">Фамилия</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('phone')}/>
                        <div className="underline" />
                        <label htmlFor="">Телефон</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('postbig')}/>
                        <div className="underline" />
                        <label htmlFor="">Должность</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('postsmall')}/>
                        <div className="underline" />
                        <label htmlFor="">Отдел</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('whats_app_phone')}/>
                        <div className="underline" />
                        <label htmlFor="">WhatsApp</label>
                    </div>

                    <div className="inputData">
                        <input type="text" required {...register('tg')}/>
                        <div className="underline" />
                        <label htmlFor="">Telegram</label>
                    </div>
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default MyForm;
