import React from 'react';
import styles from './Table.module.sass'
import Table from "../../../../shared/Table";
import {observer} from "mobx-react";
import useStore from "../../../../hooks/useStore";
import {Link} from "react-router-dom";
import TableLink from "../../../../shared/Table/Row/Link";
import Badge, {statusTypes} from "../../../../shared/Badge";
import ManagerCell from "./ManagerCell";
import ServicesCell from "./ServicesCell";
import ActivitiesCell from "./ActivitiesCell";
import HeaderButton from "../HeaderButton";
import useHeaderButtons from "../../hooks/useHeaderButtons";
import logo from "../../../../shared/Logo";


const ClientsTable = observer(() => {
    const {homeStore} = useStore()
    const headerButtons = useHeaderButtons()
    const cols = React.useMemo(() => [
        {
            Header: 'ФИО/Название',
            id: 'fio',
            sortType: 'basic',
            accessor:'name',
            Cell: ({row}) => {
                const data = row?.original
                return <TableLink to={'/r'} name={data.name}/>
            }
        },
        {
            Header: 'Статус клиента',
            id: 'status',
            Cell: ({row}) => {
                const data = row?.original
                return <Badge status={data.status} statusType={statusTypes.clients} />
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
    const data = React.useMemo(() => homeStore?.clients, [homeStore?.clients])
    return (
        <div className={styles.table}>
            <Table statusType={statusTypes.clients} headerActions={{
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