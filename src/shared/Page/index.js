import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";
import '../../styles/app.sass'

const Page = ({ wide, children, title, titleAfter }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className={styles.page}>
                {/*<div className={cn(!visible && styles.disabled)}>*/}
                    <Sidebar
                        sideVisible={visible}
                        sideSetVisible={setVisible}
                        className={cn(styles.sidebar, { [styles.visible]: visible, [styles.disabled]:!visible })}
                        onClose={() => setVisible(false)}
                    />
            {/*</div>*/}
                <Header onOpen={() => setVisible(true)} />
                <div className={styles.inner}>
                    <div
                        className={cn(styles.container, {
                            [styles.wide]: wide,
                        })}
                    >
                        {title && <div className={cn("h4", styles.title)}>
                            {title}
                            {titleAfter}
                        </div>}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;