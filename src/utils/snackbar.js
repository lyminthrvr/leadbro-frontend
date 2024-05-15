import {enqueueSnackbar} from "notistack";

export const handleSubmit = (text) => {
    enqueueSnackbar(text,{variant:'success'})
}
export const handleError = (text) => {
    enqueueSnackbar(text,{variant:'error'})
}
export const handleInfo = (text) => {
    enqueueSnackbar(text,{variant:'info'})
}