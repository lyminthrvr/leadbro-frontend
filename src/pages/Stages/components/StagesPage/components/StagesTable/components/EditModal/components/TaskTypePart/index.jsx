import React, { useEffect, useState } from 'react';
import ResponsibleInput from '../../../../../../../../../../shared/Input/ResponsibleInput';
import TextInput from '../../../../../../../../../../shared/TextInput';
import styles from '../../../../../../../../../Services/components/ServicesTable/components/EditModal/Modal.module.sass';
import {
  formatDate,
  formatDateWithOnlyDigits,
} from '../../../../../../../../../../utils/formate.date';
import { convertToHours } from '../../../../../../../../../../utils/format.time';
import Switch from '../../../../../../../../../../shared/Switch';

const Index = ({
  data: {
    auditors: initialAuditors,
    executors: initialExecutors,
    responsibles: initialResponsibles,
    type,
    showInLK,
    taskLinked,
    deadline,
    deadlineTime,
    actualTime,
  },
  handleChange,
  handleAdd,
  className,
}) => {
  const [mappedAuditors, setMappedAuditors] = useState([]);
  const [mappedExecutors, setMappedExecutors] = useState([]);
  const [mappedResponsibles, setMappedResponsibles] = useState([]);

  const mapValuesForInput = (values) => {
    if (Array.isArray(values)) {
      return values.map((el, index) => ({
        value: el.id !== null ? el.id : index,
        label: el.id !== null ? `${el.fio}` : el.fio,
      }));
    }
    return [];
  };

  useEffect(() => {
    setMappedAuditors(mapValuesForInput(initialAuditors));
    setMappedExecutors(mapValuesForInput(initialExecutors));
    setMappedResponsibles(mapValuesForInput(initialResponsibles));
  }, [initialAuditors, initialExecutors, initialResponsibles]);
  return (
    <div className={className}>
      <TextInput
        label={'Тип задачи'}
        name={'deadline'}
        value={type.title}
        readonly={true}
        className={styles.input}
      />
      <TextInput
        label={'Дедлайн'}
        name={'deadline'}
        value={formatDateWithOnlyDigits(deadline)}
        readonly={true}
        className={styles.input}
      />
      <ResponsibleInput
        canAdd={false}
        max={1}
        onAdd={(name) =>
          handleAdd(name, { fio: '', id: initialResponsibles.length })
        }
        onChange={(name, value) => handleChange(`${name}.fio`, value)}
        name={'responsibles'}
        label={'Ответственный'}
        values={mappedResponsibles}
      />
      <ResponsibleInput
        max={3}
        onAdd={(name) =>
          handleAdd(name, { fio: '', id: initialAuditors.length })
        }
        onChange={(name, value) => handleChange(`${name}.fio`, value)}
        name={'auditors'}
        label={'Аудиторы'}
        values={mappedAuditors}
      />
      <TextInput
        label={'Плановое время, ч'}
        name={'deadlineTime'}
        value={convertToHours(deadlineTime)}
        readonly={true}
        className={styles.input}
      />
      <TextInput
        label={'Фактическое время, ч'}
        name={'actualTime'}
        value={convertToHours(actualTime)}
        readonly={true}
        className={styles.input}
      />

      <ResponsibleInput
        max={3}
        onAdd={(name) =>
          handleAdd(name, { fio: '', id: initialExecutors.length })
        }
        onChange={(name, value) => handleChange(`${name}.fio`, value)}
        name={'executors'}
        label={'Аудиторы'}
        values={mappedExecutors}
      />
      <Switch
        className={styles.switch}
        name={'showInLK'}
        label={'Показать в личном кабинете'}
        value={showInLK}
        onChange={(name, value) => handleChange(name, value)}
      />
    </div>
  );
};

export default Index;
