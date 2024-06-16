export const statusTypes = {
    inProgress:'inProgress',
    finished:'finished',

}
export const statusTypesRu = {
    inProgress:'В работе',
    finished:'Завершено',

}


export const colorStatusTypes = {
    inProgress:{status:statusTypesRu.inProgress,class:'status-green'},
    finished:{status:statusTypesRu.finished,class:'status-red-dark'},

}

export const statusTaskTypes = {
    inProgress:'inProgress',
}
export const statusTaskTypesRu = {
    inProgress:'На составлении',

}


export const colorStatusTaskTypes = {
    inProgress:{status:statusTaskTypesRu.inProgress,class:'status-disabled'},
}


export const statusActTypes = {
    notAssignedScan:'notAssignedScan',
    notAssignedOriginal:'notAssignedOriginal',

}
export const statusActTypesRu = {
    notAssignedScan:'Скан не подписан',
    notAssignedOriginal: 'Оригинал не подписан'

}


export const colorStatusActTypes = {
    notAssignedScan:{status:statusActTypesRu.notAssignedScan,class:'status-green'},
    notAssignedOriginal:{status:statusActTypesRu.notAssignedOriginal,class:'status-green'},
}

export const statusBillTypes = {
    payed:'payed',
}
export const statusBillTypesRu = {
    payed:'Оплачен',
}


export const colorStatusBillTypes = {
    payed:{status:statusBillTypesRu.payed,class:'status-green'},
}




