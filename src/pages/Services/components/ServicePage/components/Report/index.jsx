import React from 'react';
import styles from "./Report.module.sass";
import Icon from "../../../../../../shared/Icon";
import {formatDateWithOnlyDigits} from "../../../../../../utils/formate.date";
import ServiceBadge, {serviceStatuses} from "../Statuses";
import CardField from "../CardField";
import Button from "../../../../../../shared/Button ";
import Basis from "../../../../../../shared/Basis";

const Report = () => {
    return (
        <div>
            <CardField label={'Отчет'}>
                <Basis className={styles.report_container}>
                   <Button classname={styles.button} name={'Создать отчет'}/>
                </Basis>
            </CardField>
        </div>
    );
};

export default Report;