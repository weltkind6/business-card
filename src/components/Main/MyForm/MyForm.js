import React, {useState} from 'react';
import './style.css';
import {Controller, useForm} from "react-hook-form";
import axios from "axios";

const MyForm = ({name, surname, postsmall, postbig, tg, mail, phone, whatsApp}) => {
    const {register, handleSubmit, control, formState: { errors } } = useForm();
    const [inputName, setInputName] = useState(name);
    const [inputSurname, setInputSurname] = useState(surname);
    const [inputPostsmall, setInputPostsmall] = useState(postsmall);
    const [inputPostBig, setInputPostBig] = useState(postbig);
    const [inputTg, setInputTg] = useState(tg);
    const [inputPhone, setInputPhone] = useState(phone);
    const [inputWhatsApp, setInputWhatsApp] = useState(whatsApp);
    const [submitData, setSubmitData] = useState([])
    console.log('submitData', submitData)

    const submitHandler = () => {
      axios.put('https://bc.okonti.ru/api/bc/1/', {
          "file_foto": null,
          "surname": "",
          "name": "Bolodya",
          "postbig": "",
          "postsmall": "",
          "phone": "",
          "whats_app_phone": "",
          "mail": "",
          "tg": "",
          "bc_hash": "",
          "bc_hash_edit": ""
      })
          .then(response => console.log(response.data))
          .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <div className="text">
                Редактировать
            </div>
            <form
                action="src/components/Main/MyForm#"
                onSubmit={handleSubmit((data) => setSubmitData(data))}>

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
                <div className="formRow submitBtn">
                    <div className="inputData">
                        <div className="inner" />
                        <input type="submit" value="отправить"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyForm;
