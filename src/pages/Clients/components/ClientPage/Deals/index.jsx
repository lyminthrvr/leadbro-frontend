import React, {useMemo} from 'react';
import ManagerCell from "../../ClientsTable/Cells/ManagerCell";
import {formatDate} from "../../../../../utils/formate.date";
import Table from "../../../../../shared/Table";
import {formatSum} from "../../../../../utils/format.number";
import AdaptiveCard from "./AdaptiveCard";

const ClientDeals = ({deals}) => {
    const cols = React.useMemo(() => [
        {
            Header: 'Сделка',
            id: 'activity',
            sortType: 'basic',
            accessor: 'description',
            Cell: ({row}) => {
                const data = row?.original
                console.log(data,'descr')
                return <p>{data.description}</p>
            },

        },

        {
            Header: 'Ответственный',
            id: 'responsible',
            sortType: 'basic',
            accessor: 'responsible.name',
            Cell: ({row}) => {
                const data = row?.original
                return <ManagerCell manager={data.responsible}/>
            },

        },
        {
            Header: 'Статус',
            id: 'status',

            Cell: ({row}) => {
                const data = row?.original
                return <p>{data.status}</p>
            },

        },
        {
            Header: 'Сумма',
            id: 'sum',
            Cell: ({row}) => {
                const data = row?.original
                return <p>{formatSum(data.sum)}</p>
            },

        },
    ], [])
    const data = useMemo(()=>deals??[],deals)
    return (
        <div>
            <Table smallTable={true} headerInCard={true} cardComponent={(data,onPagination)=><AdaptiveCard data={data} onPagination={onPagination} />} headerActions={{
                sorting:true,
                add: {
                    action:()=>console.log('1234'),
                    title:''
                }
            }} onPagination={true} title={'Cделки'} data={data} columns={cols}/>
        </div>
    );
};

export default ClientDeals;