import React from 'react';
import Button from "../../../../shared/Button ";
import Icon from "../../../../shared/Icon";
import styles from './ButtonHeader.module.sass'
const HeaderButton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Icon name={'setting'} size={'24'}/>
            </div>
            <Button adaptiveIcon={<Icon name={'plus'} size={8}/>}  name={'Добавить клиента'} />
        </div>
    );
};

export default HeaderButton;