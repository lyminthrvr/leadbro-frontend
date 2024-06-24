import React, {useState} from 'react';
import Modal from "../../../../../../shared/Modal";
import styles from './Modal.module.sass'
import TextInput from "../../../../../../shared/TextInput";
import Dropdown from "../../../../../../shared/Dropdown/Default";
import useServiceTypes from "../../../../hooks/useServiceTypes";
import {observer} from "mobx-react";
import ValuesSelector from "../../../../../../shared/Selector";
import useMembers from "../../../../../Members/hooks/useMembers";
import useServiceStatuses from "../../../../hooks/useServiceStatuses";
import {statusTypesRu} from "../../../../services.types";
import DatePicker from "react-datepicker";
import Calendar from "../../../../../../shared/Datepicker";
import useClients from "../../../../../Clients/hooks/useClients";
import cn from "classnames";
import Button from "../../../../../../shared/Button ";
const EditModal = observer(({data}) => {
    console.log(data,'editmodaldata')
    const serviceTypes = useServiceTypes()
    const [startDate, setStartDate] = useState(new Date());
    const {members} = useMembers()
    const statuses = useServiceStatuses()
    const {clients} = useClients()
    const timeSelector = ['минут','часов','дней']

    console.log(members,'members')
    console.log(serviceTypes,'serviceTypes')
    return (
        <Modal size={'xl'}>
            <div className={styles.name}>
                Редактирование услуги
            </div>
            <TextInput onChange={()=>console.log(123)} value={data.title} edited={true} className={styles.input} label={'Название услуги'}/>
            <Dropdown
                setValue={()=>console.log(1234)}
                classNameContainer={styles.input}
                label={'Тип услуги'}
                value={serviceTypes?.find(el => el.id === data.type.id)?.title}
                renderOption={(opt) => opt.title}
                options={serviceTypes}
            />
            <ValuesSelector
                onChange={()=>console.log(12345)}
                isMulti={false}
                label="Ответственный"
                options={members.map(el => ({value: el.id, label: `${el.firstName} ${el.secondName} ${el.lastName}`}))}
                value={{value: data.manager.id, label: `${data.manager.name} ${data.manager.surname}`}}
                // onChange={setSelectedParticipants}
            />
            <ValuesSelector
                onChange={()=>console.log(12345)}
                isMulti={true}
                label="Участники"
                options={members.map(el => ({value: el.id, label: `${el.firstName} ${el.secondName} ${el.lastName}`}))}
                value={data.command.map(el => ({value: el.id, label: el.fio}))}
                // onChange={setSelectedParticipants}
            />
            <div className={styles.flex}>
                <Dropdown
                    setValue={()=>console.log(1234)}
                    classNameContainer={styles.input}
                    label={'Статус'}
                    value={statusTypesRu[data.status]}
                    renderOption={(opt) => opt[1]}
                    options={statuses}
                />
                <Calendar label={'Дедлайн'} value={startDate} onChange={(date) => setStartDate(date)}/>
            </div>
            <ValuesSelector
                onChange={()=>console.log(12345)}
                isMulti={false}
                label="Клиент"
                options={clients.map(el => ({value: el.id, label: el.title}))}
                value={{value: data.client.id, label: data.client.title}}
                // onChange={setSelectedParticipants}
            />
            <div>
                <div className={styles.label}>Бюджет планируемого времени</div>
                <div className={cn(styles.flex, styles.flex__lowerGap,styles.lowZIndex)}>

                    <TextInput onChange={()=>console.log(123)} value={data.stages[0].time.planned.planned} edited={true} className={styles.input}/>
                    <Dropdown
                        setValue={()=>console.log(1234)}
                        classNameContainer={styles.input}
                        value={timeSelector?.find(el => el === data.stages[0].time.planned.type)}
                        options={timeSelector}
                    />
                    <TextInput onChange={()=>console.log(123)} value={data.stages[0].time.planned.planned} edited={true} className={styles.input}/>
                    <Dropdown
                        setValue={()=>console.log(1234)}
                        classNameContainer={styles.input}
                        value={timeSelector?.find(el => el === data.stages[0].time.planned.type)}
                        options={timeSelector}
                    />
                </div>
            </div>
            <div>
                <div  className={styles.label}>Фактическое время</div>
                <div className={cn(styles.flex,styles.flex__lowerGap,styles.lowZIndex)}>
                    <TextInput onChange={()=>console.log(123)} value={data.stages[0].time.planned.planned} edited={true}  className={styles.input}/>
                    <Dropdown
                        setValue={()=>console.log(1234)}
                        classNameContainer={cn(styles.input,styles.lowZIndex)}
                        value={timeSelector?.find(el => el === data.stages[0].time.planned.type)}
                        options={timeSelector}
                    />
                    <TextInput onChange={()=>console.log(123)} value={data.stages[0].time.planned.planned} edited={true} className={cn(styles.input,styles.lowZIndex)}/>
                    <Dropdown
                        setValue={()=>console.log(1234)}
                        classNameContainer={cn(styles.input,styles.lowZIndex)}
                        value={timeSelector?.find(el => el === data.stages[0].time.planned.type)}
                        options={timeSelector}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <Button classname={styles.button} name={'Сохранить'} type={'primary'}/>
                <Button classname={styles.button} name={'Удалить'} type={'secondary'}/>
            </div>


            {/*{data.id}*/}
            {/*<div>close</div>*/}

        </Modal>
    );
});

export default EditModal;