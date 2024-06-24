import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import { createPortal } from 'react-dom';
import styles from './Module.module.sass';
import Icon from "../Icon";
import cn from "classnames";
import useOutsideClick from "../../hooks/useOutsideClick";
import {motion} from 'framer-motion'
import {opacityTransition} from "../../utils/motion.variants";

const Modal = ({ size = 'sm', handleClose, children, cls }) => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);
    const innerRef = useRef(null);

    const handleCloseModal = useCallback(() => {
        setIsVisible(false);
        handleClose && handleClose();
        document.body.style.overflow = 'auto'
    }, [handleClose]);

    const escFunction = useCallback(
        (e) => {
            debugger
            if (e.keyCode === 27) {
                handleCloseModal();
            }
        },
        [handleCloseModal]
    );

    useLayoutEffect(() => {
        const modalNode = ref.current;
        if(modalNode) {
            document.body.appendChild(modalNode);
            document.addEventListener("keydown", escFunction, false);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener("keydown", escFunction, false);
            if (modalNode && modalNode.parentNode) {
                // modalNode.parentNode.removeChild(modalNode);
            }
            document.body.style.overflow = 'auto';
        };
    }, [escFunction]);

    useOutsideClick(innerRef, handleCloseModal);

    if (!isVisible) {
        return null;
    }

    return createPortal(
        <motion.div
            initial={'hidden'} animate={'show'} variants={opacityTransition}
            ref={ref}
            className={cn(styles.appModal)}
            style={size === 'sm' ? undefined : { maxHeight: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <div ref={innerRef} className={cn(styles.appModal__inner,{[styles.appModal__inner__sm]:size==='sm'},{[styles.appModal__inner__xl]:size==='xl'}, cls)}>
                <div className={styles.appModal__closeIcon} onClick={handleCloseModal}>
                    <Icon fill={'#6F767E'} name={'close'} size={20} />
                </div>
                {children}
            </div>
        </motion.div>,
        document.body
    );
};

export default Modal;
