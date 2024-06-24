import React, {useState} from 'react';
import Modal from "../../../../../../shared/Modal";
import styles from './Modal.module.sass'
import TextInput from "../../../../../../shared/TextInput";
import Dropdown from "../../../../../../shared/Dropdown/Default";
import useServiceTypes from "../../../../hooks/useServiceTypes";
import {observer} from "mobx-react";
import ValuesSelector from "../../../../../../shared/Selector";
import useMembers from "../../../../../Members/hooks/useMembers";
const participants = ["Илья Сорокин", "Александр Абрамов", "Шилов Александр", "Иван Иванов", "Петр Петров"];
const EditModal = observer(({data}) => {
    console.log(data,'editmodaldata')
    const serviceTypes = useServiceTypes()
    const {members} = useMembers()
    console.log(members,'members')
    console.log(serviceTypes,'serviceTypes')
    return (
        <Modal size={'xl'}>
            <div className={styles.name}>
                Редактирование услуги
            </div>
            <TextInput value={data.title} edited={true}  className={styles.input} label={'Название услуги'}/>
            <Dropdown
                classNameContainer={styles.input}
                label={'Тип услуги'}
                value={serviceTypes?.find(el=>el.id === data.type.id)?.title}
                renderOption={(opt)=>opt.title}
                options={serviceTypes}
            />
            <ValuesSelector
                isMulti={false}
                label="Ответственный"
                options={members.map(el=>({value:el.id,label:`${el.firstName} ${el.secondName} ${el.lastName}`}))}
                value={{value:data.manager.id,label:`${data.manager.name} ${data.manager.surname}`}}
                // onChange={setSelectedParticipants}
            />
            <ValuesSelector
                isMulti={true}
                label="Участники"
                options={members.map(el=>({value:el.id,label:`${el.firstName} ${el.secondName} ${el.lastName}`}))}
                value={data.command.map(el=>({value:el.id,label:el.fio}))}
                // onChange={setSelectedParticipants}
            />

            {/*{data.id}*/}
            {/*<div>close</div>*/}
            
        </Modal>
    );
});

export default EditModal;