import React, {useRef, useState} from 'react';
import Tooltip from "../../Tooltip";
import ActionList from "../Actions/ActionList";
import useOutsideClick from "../../../hooks/useOutsideClick";

const Index = ({className,classNameDot,actions,props,inputRef,classNameActions,classNameDotsContainer}) => {
    const [close,setCloseState] = useState(false)
    console.log(close,'close')
    const ref = useRef(null)
    useOutsideClick(ref,()=>setCloseState(true))
    return (
        <div ref={ref}   className={classNameDotsContainer}>
            <Tooltip setClose={setCloseState} place={'bottom-start'} close={close}  event={'click'} title={<ActionList setClose={()=>{
                setCloseState(true)
            }} withLabels={true} actions={actions} props={props} inputRef={inputRef} classNameActions={classNameActions}/>}>
                <div className={className}>
                    <div className={classNameDot}></div>
                    <div className={classNameDot}></div>
                    <div className={classNameDot}></div>
                </div>
            </Tooltip>

        </div>
    );
};

export default Index;