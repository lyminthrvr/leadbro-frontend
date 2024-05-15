import {useEffect, useLayoutEffect} from "react";

const useAutosizeTextArea = (
    textAreaRef,
    value
) => {
    useLayoutEffect(() => {
        if (textAreaRef.current) {
            debugger
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAreaRef.current, value]);
};

export default useAutosizeTextArea;
