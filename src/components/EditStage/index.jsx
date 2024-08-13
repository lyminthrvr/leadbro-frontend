import React, { useCallback, useMemo, useState } from 'react';
import TextInput from '../../shared/TextInput';
import styles from '../../pages/Services/components/ServicesTable/components/EditModal/Modal.module.sass';
import additionStyles from './Edit.module.sass';
import Calendar from '../../shared/Datepicker';
import Switch from '../../shared/Switch';
import Dropdown from '../../shared/Dropdown/Default';
import useStageStatuses from '../../pages/Stages/hooks/useStageStatuses';
import {
  stageStatusTypesRu,
  stageStatusTypes,
} from '../../pages/Stages/stages.types';
import DurationSelector from '../DurationSelector';
import UpdateDocs from '../UpdateDocs';
import cn from 'classnames';

const Index = ({ stage, onChange, stageId }) => {
  const statuses = useStageStatuses();
  return (
    <div className={cn(styles.stageModal, styles.flex, additionStyles.flex)}>
      <div className={styles.flexBig}>
        <div className={styles.name}>Редактирование этапа</div>
        <div className={cn(styles.flex, additionStyles.flex)}>
          <TextInput
            onChange={({ target }) => onChange(target.name, target.value)}
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
        <div className={cn(styles.flex, styles.flex__lowerGap)}>
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
        <div className={cn(styles.flex, styles.flex__lowerGap)}>
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
      <div className={styles.flexSmall}>
        <UpdateDocs onChange={onChange} stageId={stageId} />
      </div>
    </div>
  );
};

export default Index;
