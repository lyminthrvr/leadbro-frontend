import React, { useCallback, useMemo, useState } from 'react';
import Modal from '../../../../../../shared/Modal';
import styles from './Modal.module.sass';
import TextInput from '../../../../../../shared/TextInput';
import Dropdown from '../../../../../../shared/Dropdown/Default';
import useServiceTypes from '../../../../hooks/useServiceTypes';
import { observer } from 'mobx-react';
import ValuesSelector from '../../../../../../shared/Selector';
import useMembers from '../../../../../Members/hooks/useMembers';
import useServiceStatuses from '../../../../hooks/useServiceStatuses';
import { statusTypesRu } from '../../../../services.types';
import DatePicker from 'react-datepicker';
import Calendar from '../../../../../../shared/Datepicker';
import useClients from '../../../../../Clients/hooks/useClients';
import cn from 'classnames';
import Button from '../../../../../../shared/Button';
import useServices from '../../../../hooks/useServices';
import useServiceApi from '../../../../services.api';
import {
  handleInfo,
  handleSubmit as handleSubmitSnackbar,
} from '../../../../../../utils/snackbar';
import TextLink from '../../../../../../shared/Table/TextLink';
const EditModal = observer(({ data }) => {
  console.log(data, 'editmodaldata');
  const serviceTypes = useServiceTypes();
  const serviceStore = useServices();
  const { members } = useMembers();
  const statuses = useServiceStatuses();
  const {
    data: { clients },
  } = useClients();
  const api = useServiceApi();
  const service = useMemo(
    () => serviceStore.getById(data.id),
    [data.id, serviceStore.services, serviceStore.drafts],
  );

  const handleChange = (name, payload, withId = true) => {
    serviceStore.changeById(data?.id, name, payload, withId);
  };

  const handleReset = useCallback((path = '') => {
    serviceStore.resetDraft(data.id, path);
  }, []);

  const handleSubmit = useCallback(() => {
    handleSubmitSnackbar('Услуга успешно отредактирована');
    serviceStore.submitDraft();
    api.setServices(clients);
  }, []);

  return (
    <Modal handleSubmit={handleSubmit} handleClose={handleReset} size={'md'}>
      <div className={styles.name}>Редактирование услуги</div>
      <TextInput
        onChange={({ target }) => handleChange(target.name, target.value)}
        name={'title'}
        value={service?.title}
        edited={true}
        className={styles.input}
        label={'Название услуги'}
      />
      <Dropdown
        setValue={(e) => handleChange(`type`, e)}
        classNameContainer={styles.input}
        label={'Тип услуги'}
        value={serviceTypes?.find((el) => el.id === service?.type?.id)?.title}
        renderOption={(opt) => opt.title}
        options={serviceTypes}
    />
      <ValuesSelector
        onChange={(e) =>
          handleChange(
            'manager',
            e.length ? members.find((el) => el?.id === e[0]?.value) : null,
          )
        }
        isMulti={false}
        label="Ответственный"
        options={members.map((el) => ({
          value: el.id,
          label: `${el.name} ${el.surname}`,
        }))}
        value={
          service.manager
            ? {
                value: service.manager?.id,
                label: `${service.manager.name} ${service.manager.surname}`,
              }
            : null
        }
        // onChange={setSelectedParticipants}
      />
      <ValuesSelector
        onChange={(e) =>
          handleChange(
            'command',
            e.length
              ? members.filter((member) =>
                  e.some((option) => option.value === member.id),
                )
              : null,
          )
        }
        isMulti={true}
        label="Участники"
        options={members.map((el) => ({
          value: el.id,
          label: `${el.name} ${el.surname}`,
        }))}
        value={
          service.command
            ? service.command.map((el) => ({
                value: el.id,
                label: `${el.name} ${el.surname}`,
              }))
            : null
        }
        // onChange={setSelectedParticipants}
      />
      <div className={styles.flex}>
        <Dropdown
          setValue={(e, index) => handleChange(`status`, e[0])}
          classNameContainer={styles.input}
          label={'Статус'}
          value={statusTypesRu[service.status]}
          renderOption={(opt) => opt[1]}
          options={statuses}
        />
        <Calendar
          label={'Дедлайн'}
          value={service?.stages[0].task.endDate}
          onChange={(date) => handleChange('stages.0.task.endDate', date)}
        />
      </div>
      <ValuesSelector
        onChange={(e) =>
          handleChange(
            'client',
            e.length ? clients.find((el) => el.id === e[0]?.value) : null,
          )
        }
        isMulti={false}
        label={
          <div className={styles.client_label}>
            Клиент<TextLink>Создать клиента</TextLink>
          </div>
        }
        options={clients.map((el) => ({ value: el.id, label: el.title }))}
        value={
          service.client
            ? { value: service.client.id, label: service.client.title }
            : null
        }
        // onChange={setSelectedParticipants}
      />
    </Modal>
  );
});

export default EditModal;
