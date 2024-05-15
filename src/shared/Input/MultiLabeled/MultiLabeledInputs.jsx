import React from 'react';
import Icon from "../../Icon";
import styles from '../Card/CardInput.module.sass'

const MultiInputLabeled = ({label,onAdd,children}) => {
        return (
            <>
            <div className={styles.label_multiple}>
                <div >
                    {label}
                    <Icon onClick={onAdd} fill={'#6F767E'} size={10} name={'plus'}/>
                </div>
            </div>
                {children}
            </>
        );
};

export default MultiInputLabeled;