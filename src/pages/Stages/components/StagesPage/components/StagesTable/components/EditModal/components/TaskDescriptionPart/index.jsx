import React from 'react';
import StageBadge, { StageStatuses } from '../../../StagesBadge';
import Button from '../../../../../../../../../../shared/Button';
import TextInput from '../../../../../../../../../../shared/TextInput';
import Dropdown from '../../../../../../../../../../shared/Dropdown/Default';
import TextLink from '../../../../../../../../../../shared/Table/TextLink';
import CommentsList from '../../../../../../../../../../components/CommentsList';
import useTemplatesTypes from '../../../../../../../../hooks/useTemplatesTypes';
import useServiceTypes from '../../../../../../../../../Services/hooks/useServiceTypes';
import useServices from '../../../../../../../../../Services/hooks/useServices';
import styles from './Description.module.sass';
import cn from 'classnames';
import { observer } from 'mobx-react';
const Index = observer(
  ({
    data: {
      comments,
      description,
      id,
      comment,
      template,
      service,
      title,
      status,
    },
    handleChange,
    handleSave,
    handleDecline,
    className,
  }) => {
    const templateTypes = useTemplatesTypes();
    const { services } = useServices();
    return (
      <div className={cn(styles.border_container, className)}>
        <div className={styles.buttons}>
          <div className={styles.buttons_actions}>
            <Button isSmall={false} name={'Принять'} onClick={handleSave} />
            <Button
              isSmall={false}
              type={'secondary_outline'}
              name={'Отклонить'}
              onClick={handleDecline}
            />
          </div>
          <div>
            <StageBadge status={status} statusType={StageStatuses.tasks} />
          </div>
        </div>
        <TextInput
          classLabel={styles.input_label}
          onChange={({ target }) => handleChange(target.name, target.value)}
          name={`tasks.${id}.title`}
          value={title}
          edited={true}
          className={styles.input}
          label={'Задача'}
        />
        <Dropdown
          setValue={(e) => handleChange(`tasks.${id}.service`, e)}
          classNameContainer={styles.input}
          label={'Услуга'}
          value={services?.find((el) => el.id === service?.id)?.title}
          renderOption={(opt) => opt.title}
          options={services}
        />
        <Dropdown
          setValue={(e) => handleChange(`tasks.${id}.template`, e)}
          classNameContainer={styles.input}
          label={
            <div className={styles.template_label}>
              <span>Шаблон задачи</span>
              <TextLink>Страница задачи</TextLink>
            </div>
          }
          value={templateTypes?.find((el) => el.id === template?.id)?.title}
          renderOption={(opt) => opt.title}
          options={templateTypes}
        />
        <TextInput
          onChange={({ target }) => handleChange(target.name, target.value)}
          name={`tasks.${id}.description`}
          value={description}
          edited={true}
          type={'textarea'}
          rows={6}
          makeFocused={true}
          className={cn(styles.input, styles.textarea)}
          label={'Описание'}
        />
      </div>
    );
  },
);

export default Index;
