import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Notification.module.sass";
import Icon from "../../Icon";
import Actions from "../../Actions";
import Item from "./Item";
import useStore from "../../../hooks/useStore";
import OutsideClickLayout from "../../Layouts/outsideClickLayout";
import {observer} from "mobx-react";

// data

const actions = [
  {
    title: "Mark as read",
    icon: "check",
    action: () => console.log("Mark as read"),
  },
  {
    title: "Delete notifications",
    icon: "trash",
    action: () => console.log("Delete notifications"),
  },
];

const Notification = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickLayout>
      <div
        className={cn(styles.notification, className, {
          [styles.active]: visible,
        })}
      >
        <button
          className={cn(styles.head, styles.active)}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="notification" size="24" />
        </button>
        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.title}>Уведомления</div>
            <Actions
              className={styles.actions}
              classActionsHead={styles.actionsHead}
              items={actions}
              small
            />
          </div>
          <NotificationList className={className}/>
          <Link
            className={cn("button", styles.button)}
            to="/notification"
            onClick={() => setVisible(false)}
          >
            Посмотреть уведомления
          </Link>
        </div>
      </div>
    </OutsideClickLayout>
  );
};

export const NotificationList = observer(({className})=> {
  const {notificationsStore} = useStore()
  const notifications = notificationsStore.getNotifications()
  const [visible, setVisible] = useState(false);
  return(
  <div className={styles.list}>
    {notifications.map((x, index) => (
        <Item
            className={cn(styles.item, className)}
            item={x}
            key={index}
            onClose={() => setVisible(false)}
        />
    ))}
  </div>)
})

export default Notification;
