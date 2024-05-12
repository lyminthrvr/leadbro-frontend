import React, {useState} from 'react';
import Card from "../../../../../shared/Card";
import styles from "../Description/Description.module.sass";
import Icon from "../../../../../shared/Icon";
import cn from "classnames";
import TextInput from "../../../../../shared/TextInput";
import CardDropdown from "../../../../../shared/Dropdown/Card";

const ClientPersons = ({persons}) => {

    return (
        <Card classTitle={styles.title} className={styles.card}
              title={'Контактные лица'}>
                {persons?.map((el)=><CardDropdown text={el.person.fio}/>)}
        </Card>
    );
};

export default ClientPersons;