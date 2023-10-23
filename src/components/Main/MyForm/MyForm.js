import React, {useState} from 'react';
import './style.css';
import {Controller, useForm} from "react-hook-form";

const MyForm = ({name, surname, postsmall, postbig, tg, mail, phone, whatsApp}) => {
    const {register, handleSubmit, control, formState: { errors } } = useForm();
    const [inputName, setInputName] = useState(name);
    const [inputSurname, setInputSurname] = useState(surname);
    const [inputPostsmall, setInputPostsmall] = useState(postsmall);
    const [inputPostBig, setInputPostBig] = useState(postbig);
    const [inputTg, setInputTg] = useState(tg);
    const [inputMail, setInputMail] = useState(mail);
    const [inputPhone, setInputPhone] = useState(phone);
    const [inputWhatsApp, setInputWhatsApp] = useState(whatsApp);

    return (
        <div className="container">
            <div className="text">
                Редактировать
            </div>
            <form action="src/components/Main/MyForm#" onSubmit={handleSubmit((data) => console.log(data))}>

                <div className="formRow">
                    <div className="inputData">
                        <Controller
                            name="file"
                            control={control}
                            render={({ field }) => (
                                <input type="file" {...field} />
                            )}
                        />
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputName}
                            required {...register('name')}
                            onChange={e => setInputName(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">Имя</label>
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputSurname}
                            required {...register('surname')}
                            onChange={e => setInputSurname(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">Фамилия</label>
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputPhone}
                            required {...register('phone')}
                            onChange={e => setInputPhone(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">Телефон</label>
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputPostBig}
                            required {...register('postbig')}
                            onChange={e => setInputPostBig(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">Должность</label>
                    </div>


                    <div className="inputData">
                        <input
                            type="text"
                            value={inputPostsmall}
                            required {...register('postsmall')}
                            onChange={e => setInputPostsmall(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">Отдел</label>
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputWhatsApp}
                            required {...register('whats_app_phone')}
                            onChange={e => setInputWhatsApp(e.target.value)}
                        />
                        <div className="underline" />
                        <label htmlFor="">WhatsApp</label>
                    </div>

                    <div className="inputData">
                        <input
                            type="text"
                            value={inputTg}
                            required {...register('tg')}
                            onChange={e => setInputTg(e.target.value)}
                        />
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
