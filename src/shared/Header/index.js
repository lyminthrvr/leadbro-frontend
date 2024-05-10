import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Search from "./Search";
import Messages from "./Messages";
import Notification from "./Notification";
import User from "./User";
import Image from "../Image";
import Logo from "../Logo";
import notification from "./Notification";
import {navigation} from "../nav";


const Header = ({ onOpen }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    onOpen();
    setVisible(false);
  };

  return (
    <header className={styles.header}>
      <button className={styles.burger} onClick={() => handleClick()}></button>
        <Logo/>
        <Search className={cn(styles.search, { [styles.visible]: visible })} />
      <button
        className={cn(styles.buttonSearch, { [styles.active]: visible })}
        onClick={() => setVisible(!visible)}
      >
        <Icon name="search" size="24" />
      </button>
        <HeadersList/>
      <div className={styles.control} onClick={() => setVisible(false)}>

        {/*<Link className={cn("button", styles.button)} to="">*/}
        {/*  <Icon name="add" size="24" />*/}
        {/*  <span>Create</span>*/}
        {/*</Link>*/}
        {/*<Messages className={styles.messages} />*/}
        <Notification className={styles.notification} />
        {/*<User className={styles.user} />*/}
      </div>
      {/* <div className={styles.btns}>
        <Link className={styles.link} to="/sign-in">
          Sign in
        </Link>
        <Link className={cn("button", styles.button)} to="/sign-up">
          Sign up
        </Link>
      </div> */}
    </header>
  );
};

const HeadersList = () => {

    const [activeIndex,setActiveIndex] = useState(0)
    const handleClick = (x, index) => {
        console.log(index, x,activeIndex,999)
        setActiveIndex(index);
        x.action();
    };
    return <div className={styles.links}>
        {navigation.map((x, index) => (
            <h3
                className={cn(styles.button, {
                    [styles.active]: activeIndex === index,
                })}
                key={index}
                onClick={() => handleClick(x, index)}
            >
                {x.title}
            </h3>
        ))}
    </div>
}

export default Header;
