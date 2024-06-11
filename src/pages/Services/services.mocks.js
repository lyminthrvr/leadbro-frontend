import {createBlob} from "../../utils/create.utils";
import {statusActTypes, statusBillTypes, statusTaskTypes, statusTypes} from "./services.types";



const createServices = () => {
    return [
        {
            id:12345678,

            title:'SEO продвижение сайта KILZ.RU',
            contractNumber:'44444',
            manager: {
                id:0,
                image: createBlob(),
                name:
                    'Александр',
                surname:
                    'Шилов',
                role:
                    'Директор'
            },
            command:[{
                id:0,
                fio:'Александр Александр Александр1',
            },
                {
                    id:1,
                    fio:'Александр Александр Александр2',
                },
            ],
            status:statusTypes.finished,
            stages:[
                {
                    id:0,
                    number:'1234',
                    title:'SEO продвижение: февраль 2024 12312321 13131312 312123121 32131',
                    task: {
                        id:0,
                        status:statusTaskTypes.inProgress,
                        description: "SEO-продвижение",
                        startDate:new Date(),
                        endDate:new Date()
                    },
                    hours:{
                        planned:{
                            planned:5,
                            actual:8,
                        },
                        extra:{
                            planned:5,
                            actual:8,
                            cost:7500,
                        }
                    },
                    act:{
                        scanStatus:statusActTypes.notAssignedScan,
                        originalStatus:statusActTypes.notAssignedOriginal,
                        withSign:{
                            id:0,
                            file:'Act with sign',
                            extension:'.pdf'
                        },
                        withoutSign:{
                            id:1,
                            file:'Act without sign',
                            extension:'.pdf'
                        }
                    },
                    bills:[
                        {
                            id:0,
                            title:'Счет №1904-1',
                            withSign:{
                                id:3,
                                file:'Bill with sign',
                                extension:'.pdf'
                            },
                            withoutSign:{
                                id:4,
                                file:'Bill without sign',
                                extension:'.pdf'
                            },
                            sum:10000,
                            status:statusBillTypes.payed,
                            payedDate:new Date(2024,12,12)
                        }
                    ]

                }
            ]
        },
        {
            id:1,

            title:'SEO продвижение сайта KILZ2.RU',
            contractNumber:'44444',
            manager: {
                id:0,
                image: createBlob(),
                name:
                    'Александр',
                surname:
                    'Шилов',
                role:
                    'Директор'
            },
            command:[{
                id:0,
                fio:'Александр Александр Александр1',
            },
                {
                    id:1,
                    fio:'Александр Александр Александр2',
                },
            ],
            status:statusTypes.finished,
            stages:[
                {
                    id:0,
                    number:'1234',
                    title:'SEO продвижение: февраль 2024',
                    task: {
                        id:0,
                        status:statusTaskTypes.inProgress,
                        description: "SEO-продвижение",
                        startDate:new Date(),
                        endDate:new Date()
                    },
                    hours:{
                        planned:{
                            planned:5,
                            actual:8,
                        },
                        extra:{
                            planned:5,
                            actual:8,
                            cost:7500,
                        }
                    },
                    act:{
                        scanStatus:statusActTypes.notAssignedScan,
                        originalStatus:statusActTypes.notAssignedOriginal,
                        withSign:{
                            id:0,
                            file:'Act with sign',
                            extension:'.pdf'
                        },
                        withoutSign:{
                            id:1,
                            file:'Act without sign',
                            extension:'.pdf'
                        }
                    },
                    bills:[
                        {
                            id:0,
                            title:'Счет №1904-1',
                            withSign:{
                                id:3,
                                file:'Bill with sign',
                                extension:'.pdf'
                            },
                            withoutSign:{
                                id:4,
                                file:'Bill without sign',
                                extension:'.pdf'
                            },
                            sum:10000,
                            status:statusBillTypes.payed,
                            payedDate:new Date(2024,12,12)
                        }
                    ]

                }
            ]
        }
    ]
}


export default {createServices}