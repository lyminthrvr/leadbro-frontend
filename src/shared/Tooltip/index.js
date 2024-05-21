import React from "react";
import cn from "classnames";
import styles from "./Tooltip.module.sass";
import Icon from "../Icon";
import useTooltip from "../../hooks/useTooltip";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip as ReactTooltip} from "react-tooltip";
import uuid from "draft-js/lib/uuid";

interface IProps{
    className?:string,
    title?:string,
    place?:string,
    children:React.ReactNode
}
const Tooltip = ({ className, title, place, children, id=uuid() }) => {
    const hasChildren = !!React.Children.count(children);

    const childrenWithProps = hasChildren &&  React.Children?.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                'data-tooltip-id': id,
            });
        }
        return child;
    });
    return (
        <>
        {childrenWithProps}
        <ReactTooltip id = {id}>
        <div
            className={cn(styles.tooltip, className)}
        >
            {title}
        </div>
        </ReactTooltip>
        </>);
};
export default Tooltip;
