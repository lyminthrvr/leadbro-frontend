import React from 'react';
import styles from "./Avatar.module.sass"

const Avatar = ({imageSrc}) => {
    return (
        <div className={styles.logo}>
            <img src={imageSrc}/>
        </div>
    );
};

export default Avatar;