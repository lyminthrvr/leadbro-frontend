import React, { useCallback, useMemo, useState } from 'react';
import DualTimeSelector from "../DualTimeSelector";
import useStages from "../../pages/Stages/hooks/useStages";
import styles from "../../pages/Services/components/ServicesTable/components/EditModal/Modal.module.sass";

const Index =({ onChange, label }) => {
    const { data: stagesStore } = useStages();
    const stage = useMemo(
        () => stagesStore.getById(+0),
        [0, stagesStore, stagesStore.stages, stagesStore.drafts],
    );
    const handleChange = (name, payload, withId = true) => {
        console.log(name, payload)
        stagesStore.changeById(0, name, payload, withId);
    };

    return (
        <div>
            <div className={styles.label}>{label}</div>
            <DualTimeSelector onChange={handleChange} label={'Бюджет планируемого времени'} timeValue={stage?.budgetTimeValue} timeType={stage?.budgetTimeType}/>
        </div>
    );
};

export default Index;
