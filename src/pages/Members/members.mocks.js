import {createBlob} from "../../utils/create.utils";

const createMembers = () => [
    {
        id: 0,
        image: createBlob(),
        name:
            'Александр',
        surname:
            'Александр1',
        role:
            'Директор'

    },
    {
        id: 1,
        image: createBlob(),
        name:
            'Александр',
        surname:
            'Александр2',
        role:
            'Директор'
    },
    {
        id: 2,
        image: createBlob(),
        name:
            'Александр',
        surname:
            'Александр3',
        role:
            'Директор'
    },
]

export default {createMembers}