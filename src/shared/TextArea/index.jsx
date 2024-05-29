import React, {forwardRef, useEffect, useRef, useState} from 'react';
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import {observer} from "mobx-react";
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = forwardRef((props,ref) => {
    const textAreaRef = useRef(  null);
    const [rendered,setRendered] = useState(false)
    useEffect(() => {
        setTimeout(()=>setRendered(true),100)
    }, []);
    useAutosizeTextArea(ref ?? textAreaRef,props.value,rendered)
    return (
            <textarea value={props.value} ref={ref ?? textAreaRef} rows={1} {...props}/>
        //
    );
});

export default TextArea;