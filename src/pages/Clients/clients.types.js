export const statusTypes = {
    inProgress:'inProgress',
    notInProgress:'notInProgress',
    partner:'partner',
    concurrent:'concurrent',
}
export const statusTypesRu = {
    inProgress:'В работе',
    notInProgress:'Не в работе',
    partner:'Партнер',
    concurrent:'Конкурент',
}


export const colorStatusTypes = {
    inProgress:{status:statusTypesRu.inProgress,class:'status-green'},
    notInProgress:{status:statusTypesRu.notInProgress,class:'status-red-dark'},
    partner:{status:statusTypesRu.partner,class:'status-purple'},
    concurrent:{status:statusTypesRu.concurrent,class:'status-yellow'},
}