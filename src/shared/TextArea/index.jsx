import React, {forwardRef, useEffect, useRef, useState} from 'react';
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import {observer} from "mobx-react";

const TextArea = forwardRef((props,ref) => {
    const textAreaRef = useRef(  null);
    useAutosizeTextArea(ref ?? textAreaRef,props.value)
    return (
        <textarea  value={props.value} ref={ref ?? textAreaRef} rows={1} {...props}/>

    );
});

export default TextArea;