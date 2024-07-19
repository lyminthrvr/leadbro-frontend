import React from 'react';
import TextInput from '../../shared/TextInput';
import styles from '../../pages/Services/components/ServicesTable/components/EditModal/Modal.module.sass';
import Calendar from '../../shared/Datepicker';

const Index = ({ onChange, stage }) => {
  return (
    <div>
      <div>Редактирование этапа</div>
      <div>
        <TextInput
          onChange={({ target }) => onChange(target.name, target.value)}
          name={'title'}
          value={stage?.title}
          edited={true}
          className={styles.input}
          label={'Название этапа'}
        />
        <TextInput
          onChange={({ target }) => onChange(target.name, target.value)}
          name={'status'}
          value={stage?.title}
          edited={true}
          className={styles.input}
          label={'Статус'}
        />
      </div>
      <div>
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
    </div>
  );
};

export default Index;
