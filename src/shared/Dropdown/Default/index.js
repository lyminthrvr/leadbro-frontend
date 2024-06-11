import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Dropdown.module.sass";
import Tooltip from "../../Tooltip";

const Dropdown = ({
                    className,
                    classDropdownHead,
                    classDropdownLabel,
                    value,
                    setValue,
                    options,
                    label,
                    tooltip,
                    small,
                    upBody,
                    renderOption, // функция для рендеринга опции
                    renderValue, // функция для рендеринга выбранного значения
                  }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };

  return (
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        {label && (
            <div className={cn(styles.label, classDropdownLabel)}>
              {label}{" "}
              {tooltip && (
                  <Tooltip
                      className={styles.tooltip}
                      title={tooltip}
                      icon="info"
                      place="right"
                  />
              )}
            </div>
        )}
        <div
            className={cn(
                styles.dropdown,
                className,
                { [styles.small]: small },
                {
                  [styles.active]: visible,
                }
            )}
        >
          <div
              className={cn(styles.head, classDropdownHead)}
              onClick={() => setVisible(!visible)}
          >
            <div className={styles.selection}>
              {renderValue ? renderValue(value) : value}
            </div>
          </div>
          <div className={cn(styles.body, { [styles.bodyUp]: upBody })}>
            {options.map((option, index) => (
                <div
                    className={cn(styles.option, {
                      [styles.selectioned]: option === value,
                    })}
                    onClick={() => handleClick(option, index)}
                    key={index}
                >
                  {renderOption ? renderOption(option) : option}
                </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
  );
};

export default Dropdown;
