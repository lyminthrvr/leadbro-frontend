import React, { useCallback, useMemo, useState } from 'react';
import TextInput from '../../shared/TextInput';
import styles from '../../pages/Services/components/ServicesTable/components/EditModal/Modal.module.sass';
import Calendar from '../../shared/Datepicker';
import Switch from "../../shared/Switch";
import Dropdown from "../../shared/Dropdown/Default";
import useStageStatuses from '../../pages/Stages/hooks/useStageStatuses';
import {stageStatusTypesRu, stageStatusTypes} from "../../pages/Stages/stages.types";

const Index =({ stage, onChange, submit }) => {
    const statuses = useStageStatuses();
    const statusKey = Object.keys(stageStatusTypesRu).find(i => stageStatusTypesRu[i] === stage.status);

  return (
    <div>
      <div className={styles.name}>Редактирование этапа</div>
      <div className={styles.flex}>
        <TextInput
            onChange={({ target }) =>onChange(target.name, target.value)}
          name={'title'}
          value={stage.title}
          edited={true}
          className={styles.input}
          label={'Название этапа'}
        />
      <Dropdown
          setValue={(e) => onChange(`status`, e[0])}
          classNameContainer={styles.input}
          label={'Статус'}
          renderOption={(opt) => opt[1]}
          options={statuses}
          value={stageStatusTypesRu[stage.status]}
      />
      </div>
      <div className={styles.flex}>
        <Calendar
          label={'Дата начала'}
          value={stage.startTime}
          onChange={(date) => onChange('startTime', date)}
        />
        <Calendar
          label={'Дата окончания'}
          value={stage.deadline}
          onChange={(date) => onChange('deadline', date)}
        />
      </div>
        <div className={styles.flex}>
            <TextInput
                onChange={({ target }) => onChange(target.name, target.value)}
                name={'actSum'}
                value={stage?.actSum}
                edited={true}
                className={styles.input}
                label={'Сумма в акте'}
            />

            <div>
                <Switch
                    className={styles.switch}
                    name={'sumByHand'}
                    label={'Указать сумму акта в ручную'}
                    value={stage?.sumByHand}
                    onChange={onChange}
                />
            </div>
        </div>
        <div>
            <TextInput
                type={'textarea'}
                onChange={({ target }) => onChange(target.name, target.value)}
                name={'taskDescription'}
                value={stage?.taskDescription}
                edited={true}
                className={styles.textarea}
                label={'Задача'}
                rows={14}
            />
        </div>
    </div>
  );
};

export default Index;
