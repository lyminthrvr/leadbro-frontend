import React, { useState } from 'react';
import Modal from '../../../../../../shared/Modal';
import modlaStyles from '../../../ClientsTable/CreateModal/styles.module.sass';
import TextInput from '../../../../../../shared/TextInput';
import styles from '../../../../../Services/components/ServicesTable/components/EditModal/Modal.module.sass';
import cn from 'classnames';
import ValuesSelector from '../../../../../../shared/Selector';
import useClientsApi from '../../../../clients.api';

const CreatePassModal = ({ companyId, onClose }) => {
  const { createPassword } = useClientsApi();

  const [newPass, setNewPass] = useState({
    service_name: '',
    login: '',
    password: '',
  });
  const handleChange = (name, value) => {
    setNewPass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setNewPass({});
    onClose();
  };
  const handleSubmit = () => {
    createPassword(companyId, newPass);
  };
  return (
    <Modal handleSubmit={handleSubmit} handleClose={handleReset} size={'sm'}>
      <div className={modlaStyles.header}>
        <p>Создание пароля</p>
      </div>
      <TextInput
        onChange={({ target }) => handleChange('service_name', target.value)}
        name={'service_name'}
        value={newPass?.service_name || ''}
        edited={true}
        className={styles.input}
        label={'Название сервиса'}
        placeholder={'Яндекс карты'}
        required
      />
      <div className={modlaStyles.flexDiv}>
        <TextInput
          onChange={({ target }) => handleChange('login', target.value)}
          name={'login'}
          value={newPass.login}
          edited={true}
          className={cn(styles.input, modlaStyles.grow)}
          label={'Логин'}
          placeholder={'login'}
        />
        <TextInput
          onChange={({ target }) => handleChange('password', target.value)}
          name={'password'}
          value={newPass.password}
          edited={true}
          className={cn(styles.input, modlaStyles.grow)}
          label={'Пароль'}
          placeholder={'pass'}
        />
      </div>
    </Modal>
  );
};

export default CreatePassModal;