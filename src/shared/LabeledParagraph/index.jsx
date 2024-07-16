import React from 'react';
import styles from './Paragraph.module.sass';
import TextLink from '../Table/TextLink';
const Index = ({ label, text, to }) => {
  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      {text && to ? (
        <TextLink to={to} className={styles.text}>
          {text}
        </TextLink>
      ) : (
        <div className={styles.text}>{text}</div>
      )}
    </div>
  );
};

export default Index;
