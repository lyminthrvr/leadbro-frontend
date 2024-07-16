import React from 'react';
import styles from './ManagerCell.module.sass';
import Avatar from '../../shared/Avatar';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Tooltip from '../../shared/Tooltip';

const ManagerCell = ({ manager, ...rest }) => {
  const imageSrc = manager?.image;

  return (
    <div className={cn(styles.container, rest.className)}>
      <Avatar imageSrc={imageSrc} />
      <div className={styles.fioContainer}>
        <div>
          <Link>
            {manager?.name} {manager?.surname} {manager?.fio}
          </Link>
        </div>
        <div>{manager?.role}</div>
      </div>
    </div>
  );
};

export default ManagerCell;
