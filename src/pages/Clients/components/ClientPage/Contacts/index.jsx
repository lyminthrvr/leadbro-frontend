import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import CardInput from "../../../../../shared/Input/Card";
import {handleError, handleInfo, handleSubmit} from "../../../../../utils/snackbar";
import Title from "../../../../../shared/Title";
import Card from "../../../../../shared/Card";
import styles from './Contacts.module.sass'
import {observer} from "mobx-react";
import useStore from "../../../../../hooks/useStore";
import MultiInputLabeled from "../../../../../shared/Input/MultiLabeled/MultiLabeledInputs";
import MultiInputComponent from "./Inputs/MultiInput.component";
import RequisitesComponent from "./Inputs/Requisites.component";

const ClientsContacts = ({contactData, onRemove, onChange, onSubmit, onReset, onAdd}) => {

    const lengthTel = useMemo(()=>Object.keys(contactData?.tel ?? {}).length,[contactData])
    const lengthEmail = useMemo(()=>Object.keys(contactData?.email ?? {}).length,[contactData])
    const lengthAddress = useMemo(()=>Object.keys(contactData?.address ?? {}).length,[contactData])
    const lengthSite = useMemo(()=>Object.keys(contactData?.site ?? {}).length,[contactData])

    const defaultActions = (path, success, info, copy = 'Элемент скопирован') => {
        // console.log(properties,'smile')
        return {
            copy: (text) => {
                navigator.clipboard.writeText(text).then(r => handleInfo(copy))
            },
            delete:  ({name}) => {
                onRemove(name)
                // setLength((prev) => ({...prev,[middleProp]:prev[middleProp]-1}))
                handleError('Элемент удален')
            },
            edit: ({name, value}) => onChange(name, value),
            submit: () => {
                onSubmit()
                handleSubmit(success)
            },
            reset: () => {
                onReset(path)
                handleInfo(info)
            },
        }
    }


    return (
        <Card classTitle={styles.title} className={styles.card}>
            <Title smallTable={true} actions={{
                add: {
                    action: () => null,
                    title: 'Добавить клиента'
                }
            }} title={'Контактные данные'}/>
            <MultiInputComponent onAdd={onAdd} contactData={contactData} label={'Телефон'} param={'tel'} type={'tel'} onActions={(path)=>defaultActions(path,'Телефон сохранен','Телефон восстановлен')}/>
            <MultiInputComponent onAdd={onAdd} contactData={contactData} label={'Адрес'} param={'address'} type={'address'} onActions={(path)=>defaultActions(path,'Адрес сохранен','Адрес восстановлен')}/>
            <MultiInputComponent onAdd={onAdd} contactData={contactData} label={'Почта'} param={'email'} type={'email'} onActions={(path)=>defaultActions(path,'Почта сохранена','Почта восстановлена')}/>
            <MultiInputComponent onAdd={onAdd} contactData={contactData} label={'Адрес сайта'} param={'site'} type={'email'} onActions={(path)=>defaultActions(path,'Сайт сохранен','Сайт восстановлен')}/>
            <RequisitesComponent onAdd={onAdd} contactData={contactData} label={'Юр. реквизиты'} onActions={(path,onSaveText,onCloseText)=>defaultActions(path,onSaveText,onCloseText)}/>

        </Card>
    );
};

export default ClientsContacts;