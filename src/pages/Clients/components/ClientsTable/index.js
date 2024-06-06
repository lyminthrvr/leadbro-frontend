import React from 'react';
import styles from './Table.module.sass'
import Table from "../../../../shared/Table";
import {observer} from "mobx-react";
import useStore from "../../../../hooks/useStore";
import {Link} from "react-router-dom";
import TableLink from "../../../../shared/Table/Row/Link";
import Badge, {statusTypes} from "../../../../shared/Badge";
import ManagerCell from "../../../../components/ManagerCell";
import ServicesCell from "./Cells/ServicesCell";
import ActivitiesCell from "./Cells/ActivitiesCell";
import logo from "../../../../shared/Logo";
import AdaptiveCard from "./Cells/AdaptiveCard";


const ClientsTable = observer(() => {
    const {clientsStore} = useStore()
    const cols = React.useMemo(() => [
        {
            Header: 'ФИО/Название',
            id: 'fio',
            sortType: 'basic',
            accessor:'name',
            Cell: ({row}) => {
                const data = row?.original
                return <TableLink to={`/${data.id}`} name={data.title}/>
            }
        },
        {
            Header: 'Статус клиента',
            id: 'status',
            Cell: ({row}) => {
                const data = row?.original
                return <Badge classname={styles.badge} status={data.status} statusType={statusTypes.clients} />
            },

        },
        {
            Header: 'Ответственный менеджер',
            id: 'manager',
            sortType: 'basic',
            accessor: 'manager.name',
            Cell: ({row}) => {
                const data = row?.original
                return <ManagerCell manager={data.manager}/>
            },

        },
        {
            Header: 'Активные услуги',
            id: 'services',
            // flexCol:true,
            // disableResizing:false,
            Cell: ({row}) => {
                const data = row?.original
                return <ServicesCell services={data.services} />
            },

        },
        {
            Header: 'Активные дела',
            id: 'activities',
            Cell: ({row}) => {
                const data = row?.original
                return <ActivitiesCell activities={data.activities} />
            },

        },
    ], [])
    const data = React.useMemo(() => clientsStore?.clients, [clientsStore?.clients])
    return (
        <div className={styles.table}>
            <Table cardComponent={(data)=>(<AdaptiveCard data={data} statusType={statusTypes.clients}/>)}  headerActions={{
                sorting:true,
                settings:true,
                add: {
                    action:()=>console.log('1234'),
                    title:'Добавить клиента'
                }
            }} title={'Клиенты'} data={data} columns={cols}/>
        </div>
    );
});

export default ClientsTable;