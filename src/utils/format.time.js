export const getFormattedTimeType = (type) =>{
    switch (type){
        case 'часов':
            return 'ч'
        case 'минут':
            return 'мин'
        case 'дней':
            return 'дн'
        default: return 'ч'
    }
}