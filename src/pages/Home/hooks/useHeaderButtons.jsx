import React from 'react';
import styles from "../components/HeaderButton/ButtonHeader.module.sass";
import Icon from "../../../shared/Icon";
import Button from "../../../shared/Button ";

const UseHeaderButtons = () => {
    const settingsJsx = (<div className={styles.icon}>
        <Icon name={'setting'} size={'24'}/>
    </div>)
    const addJsx = (
        <Button adaptiveIcon={<Icon name={'plus'} size={8}/>} name={'Добавить клиента'}/>
    )
    const buttonsJsx = (<div className={styles.container}>
        {settingsJsx}
        {addJsx}
    </div>)
    return {
        jsx: buttonsJsx,
        actions:{
            onSettings: () => console.log('Settings'),
            onAdd: () => console.log('Add client'),
            onSort: () => console.log('Settings')
        }
    }
};

export default UseHeaderButtons;