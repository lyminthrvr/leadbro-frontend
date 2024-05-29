import React from 'react';
import styles from "../Title.module.sass";
import cn from "classnames";
import Icon from "../../Icon";
import Button from "../../Button ";

const TitleButtons = ({doSort,isSortDecrease,titleButton,isSmallButton,actions}) => {
    return (
        <div className={styles.container}>
            {actions.sorting && <div onClick={doSort}
                 className={cn(styles.icon, styles.sortIcon, {[styles.sortIcon_active]: !isSortDecrease})}>
                <Icon viewBox={24} name={'sort'} size={'24'}/>
            </div>}
            {actions.settings && <div className={cn(styles.icon, styles.settings)}>
                <Icon name={'setting'} size={'24'}/>
            </div>}
            {actions.add && <Button onClick={()=>actions.add.action()} isSmallButton={isSmallButton} adaptiveIcon={<Icon name={'plus'} size={8}/>} name={titleButton}/>}
        </div>
    );
};

export default TitleButtons;