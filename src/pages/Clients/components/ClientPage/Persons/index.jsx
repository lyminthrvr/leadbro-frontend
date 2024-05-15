import React, {useState} from 'react';
import Card from "../../../../../shared/Card";
import styles from "./Persons.module.sass";
import Icon from "../../../../../shared/Icon";
import cn from "classnames";
import TextInput from "../../../../../shared/TextInput";
import CardDropdown from "../../../../../shared/Dropdown/Card";
import Title from "../../../../../shared/Title";
import CardInput from "../../../../../shared/Input/Card";
import {handleError, handleInfo, handleSubmit} from "../../../../../utils/snackbar";

const ClientPersons = ({persons,onChange,onSubmit,onReset}) => {

    const defaultActions = (path,success,info,copy='Элемент скопирован') =>( {
        copy:(text)=>{
            navigator.clipboard.writeText(text).then(r => handleInfo(copy))
        },
        delete:({name,value})=>onChange(name,''),
        edit:({name,value})=>onChange(name,value),
        submit:()=>{
            onSubmit()
            handleSubmit(success)
        },
        reset:()=>{
            onReset(path)
            handleInfo(info)
        }
    })

    return (
        <Card classTitle={styles.title} className={styles.card}>
            <Title smallTable={true} actions={{
                add: {
                    action: () => console.log('1234'),
                    title: 'Добавить клиента'
                }
            }} title={'Контактные лица'}/>
            {persons?.map((el) =>{
                const values = el
                return <CardDropdown className={styles.dropdown}  text={<b>{values.fio}</b>}>
                    <CardInput name={`contactPersons.${values.id}.role`} type={'text'} value={values.role} actions={defaultActions(`contactPersons.${values.id}.role`,'Роль сохранена','Роль восстановлена')}/>
                    <CardInput label={'Телефон'} name={`contactPersons.${values.id}.tel`} type={'tel'} value={values.tel} actions={defaultActions(`contactPersons.${values.id}.tel`,'Телефон сохранен','Телефон восстановлен')}/>
                    <CardInput label={'Почта'} name={`contactPersons.${values.id}.email`} type={'email'} value={values.email} actions={defaultActions(`contactPersons.${values.id}.email`,'Почта сохранена','Почта восстановлена')}/>
                    {values.messengers.length && <div className={styles.messengers_container} >
                        <p>Мессенджеры</p>
                        <div className={styles.messengers}>
                            {values.messengers.map((messenger)=>{
                                return <img src={`/leadbro/${Object.keys(messenger)[0]}.svg`} alt={`${Object.keys(messenger)[0]}`}/>
                            })}
                        </div>
                    </div>}
                    {/*<CardInput label={'Почта'} name={`contactPersons.${values.id}.email`} type={'email'} value={values.email} actions={defaultActions(`contactPersons.${values.id}.email`,'Почта сохранена','Почта восстановлена')}/>*/}
            </CardDropdown>})}
        </Card>
    );
};

export default ClientPersons;