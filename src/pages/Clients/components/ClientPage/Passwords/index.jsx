import React from 'react';
import {handleError, handleInfo, handleSubmit} from "../../../../../utils/snackbar";
import Card from "../../../../../shared/Card";
import styles from "../Contacts/Contacts.module.sass";
import Title from "../../../../../shared/Title";
import MultiInputPasswords from "./Inputs/MultiInput.component";

const ClientPasswords = ({passwordsData, onRemove, onChange, onSubmit, onReset, onAdd}) => {

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
            }} title={'Пароли клиента'}/>
            {passwordsData?.map((password,index) => {
                return <MultiInputPasswords index={password.id} param={'values'} onAdd={onAdd} passwordData={password} label={password?.name} onActions={(path)=>defaultActions(path,'Пароль сохранен','Пароль восстановлен')}  />
            })}
            {/*<MultiInputPasswords onAdd={onAdd} contactData={contactData} label={'Телефон'} param={'tel'} type={'tel'} onActions={(path)=>defaultActions(path,'Телефон сохранен','Телефон восстановлен')}/>*/}
            {/*<MultiInputPasswords onAdd={onAdd} contactData={contactData} label={'Адрес'} param={'address'} type={'address'} onActions={(path)=>defaultActions(path,'Адрес сохранен','Адрес восстановлен')}/>*/}
            {/*<MultiInputPasswords onAdd={onAdd} contactData={contactData} label={'Почта'} param={'email'} type={'email'} onActions={(path)=>defaultActions(path,'Почта сохранена','Почта восстановлена')}/>*/}
            {/*<MultiInputPasswords onAdd={onAdd} contactData={contactData} label={'Адрес сайта'} param={'site'} type={'email'} onActions={(path)=>defaultActions(path,'Сайт сохранен','Сайт восстановлен')}/>*/}
            {/*<MultiInputPasswords onAdd={onAdd} contactData={contactData} label={'Юр. реквизиты'} onActions={(path,onSaveText,onCloseText)=>defaultActions(path,onSaveText,onCloseText)}/>*/}

        </Card>
    );
};

export default ClientPasswords;