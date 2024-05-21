import React from 'react';
import Icon from "../../../../../../shared/Icon";
import cn from "classnames";
import styles from './Type.module.sass'
import Tooltip from "../../../../../../shared/Tooltip";

const MapActivityTypesToIcons = {
    'call':'phone'
}

const ActivityType = ({membersCount,type,className}) => {

    const getCurrentFilLAndTooltip = () => {
        switch (type){
            case 'call':
                return {fill:'#83BF6E',tooltip:'Тип мероприятия: звонок'}
        }
    }

    return (
        <div className={cn(styles.container,className)}>
            <div className={styles.members}>
                <Icon viewBox={'0 0 22 22'} size={18} name={'user'}/>
                <p>{membersCount}</p>
            </div>
            <div>
                <Tooltip place={'top'} title={getCurrentFilLAndTooltip().tooltip} >
                    <Icon viewBox={'0 0 20 20'} size={24} name={MapActivityTypesToIcons[type]} fill={getCurrentFilLAndTooltip().fill}/>
                </Tooltip>
            </div>
        </div>
    );
};

export default ActivityType;