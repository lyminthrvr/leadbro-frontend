import {useEffect, useLayoutEffect} from "react";

const useAutosizeTextArea = (
    textAreaRef,
    value,isRendered,setRendered
) => {


    useEffect(() => {
        if (textAreaRef.current && isRendered) {
            textAreaRef.current.style.height = "inherit";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = scrollHeight +  "px";
            setRendered(false)
        }
    }, [textAreaRef.current, value,isRendered]);
};

export default useAutosizeTextArea;
