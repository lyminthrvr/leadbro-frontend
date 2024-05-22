import React from 'react';
import {Link} from "react-router-dom";
import cn from "classnames";
import styles from './TextLink.module.sass'

const Index = ({children,className}) => {
    return (
        <div className={cn(styles.container,className)}>
            <Link>
                {children}
            </Link>

        </div>
    );
};

export default Index;