import React from 'react';
import styles from "./Avatar.module.sass"
import cn from "classnames";

const Avatar = ({imageSrc,className}) => {
    return (
        <div className={cn(styles.logo,className)}>
            <img src={imageSrc}/>
        </div>
    );
};

export default Avatar;