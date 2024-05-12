import {format} from "date-fns";
import {ru} from "date-fns/locale/ru";

export const formatDate = (date) => {
    let formatDate = format(date, 'cccccc, dd LLL, HH:mm', { locale: ru });
    formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    return formatDate
}

export const formatDateWithoutHours = (date) => {
    let formatDate = format(date, 'cccccc, dd LLL', { locale: ru });
    formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    return formatDate
}

export const formatHours = (date) => {
    return format(date, 'HH:mm')
}