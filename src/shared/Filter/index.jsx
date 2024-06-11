import React, {useRef, useState} from "react";
import cn from "classnames";
import styles from "./Filters.module.sass";
import Icon from "../Icon";
import useOutsideClick from "../../hooks/useOutsideClick";

const Filters = ({ className, children, title }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null)
    useOutsideClick(ref,()=>setVisible(false))

    return (
        <div
            ref={ref}
            className={cn(styles.filters, className, { [styles.active]: visible })}
        >
            <button
                className={cn("", styles.head)}
                onClick={() => setVisible(true)}
            >
                <Icon name="filter" size="24"  />
            </button>
            <div className={styles.body}>
                <div className={styles.top}>
                    <div className={cn("title-red", styles.title)}>{title}</div>
                    <button className={styles.close} onClick={() => setVisible(false)}>
                        <Icon name="close" size="20" />
                    </button>
                </div>
                {children}
            </div>
            <div className={styles.overlay} onClick={() => setVisible(false)}></div>
        </div>
    );
};

export default Filters;
