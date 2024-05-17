import React from 'react';
import Icon from "../../../../../../shared/Icon";
import cn from "classnames";
import styles from './Type.module.sass'

const MapActivityTypesToIcons = {
    'call':'phone'
}

const ActivityType = ({membersCount,type,className}) => {

    const getCurrentFill = () => {
        switch (type){
            case 'call':
                return '#83BF6E'
        }
    }

    return (
        <div className={cn(styles.container,className)}>
            <div className={styles.members}>
                <Icon viewBox={'0 0 22 22'} size={18} name={'user'}/>
                <p>{membersCount}</p>
            </div>
            <div>
                <Icon viewBox={'0 0 20 20'} size={24} name={MapActivityTypesToIcons[type]} fill={getCurrentFill()}/>
            </div>
        </div>
    );
};

export default ActivityType;