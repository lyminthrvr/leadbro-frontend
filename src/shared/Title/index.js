import React, {useState} from 'react';
import cn from "classnames";
import styles from "./Title.module.sass";
import Icon from "../Icon";
import Button from "../Button ";

const Index = ({title,actions,tableHeaders,tableActions}) => {
    console.log(tableHeaders[0].getHeaderGroupProps(),'headers')
    const [isSortDecrease,setSortDecrease] = useState(true)

    const makeAction = (name) => {
        if(actions[name] && actions[name].hasOwnProperty('action')){
            actions[name].action()
        }
    }
    const doSort = () => {

        tableActions.sorting(isSortDecrease)
        setSortDecrease(!isSortDecrease)
        makeAction('sorting')


    }
    const doFiltering = () => {

    }

    return (
        <>
            {title && <div className={cn("h4", styles.title)}>
                {title}
                <div className={styles.container}>
                    <div onClick={doSort} className={cn(styles.icon,styles.sortIcon,{[styles.sortIcon_active]:!isSortDecrease})}>
                        <Icon viewBox={24} name={'sort'} size={'24'}/>
                    </div>
                    <div onClick={doSort} className={styles.icon}>
                        <Icon name={'setting'} size={'24'}/>
                    </div>
                    <Button adaptiveIcon={<Icon  name={'plus'} size={8}/>} name={'Добавить клиента'}/>
                </div>
            </div>}
        </>
    );
};

export default Index;