import {useEffect, useLayoutEffect} from "react";

const useAutosizeTextArea = (
    textAreaRef,
    value,isRendered
) => {


    useEffect(() => {
        if (textAreaRef.current && isRendered) {
            debugger
            textAreaRef.current.style.height = "inherit";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = scrollHeight + "px";

        }
    }, [textAreaRef.current, value,isRendered]);
};

export default useAutosizeTextArea;
