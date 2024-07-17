import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './TextLink.module.sass';

const Index = ({ children, className, to = null, onClick }) => {
  return (
    <div onClick={onClick} className={cn(styles.container, className)}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default Index;
