import React, {useEffect, useRef, useState} from 'react';
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import {observer} from "mobx-react";

const TextArea = (props) => {
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef,props.value)
    return (
        <textarea value={props.value} ref={textAreaRef} rows={1} {...props}/>

    );
};

export default TextArea;