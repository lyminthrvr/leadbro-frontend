import React from 'react';
import {observer} from "mobx-react";
import useServices from "../../hooks/useServices";
import TableLink from "../../../../shared/Table/Row/Link";
import Badge, {statusTypes} from "../../../../shared/Badge";
import styles from "../../../Clients/components/ClientsTable/Table.module.sass";
import ManagerCell from "../../../../components/ManagerCell";
import ServicesCell from "../../../Clients/components/ClientsTable/Cells/ServicesCell";
import ActivitiesCell from "../../../Clients/components/ClientsTable/Cells/ActivitiesCell";
import Table from "../../../../shared/Table";
import AdaptiveCard from "../../../Clients/components/ClientsTable/Cells/AdaptiveCard";
import Tooltip from "../../../../shared/Tooltip";
import StagesCell from "./components/StagesCell";
import {getCorrectWordForm} from "../../../../utils/format.string";
import FormFilter from "./components/FormFilter";
import useTableFilters from "../../../../hooks/useTableFilters";

const ServicesTable = observer(() => {
    const servicesStore = useServices()
    const data = React.useMemo(() => servicesStore?.services, [servicesStore?.services])
    const {filteredData, setFilterValue,filters} = useTableFilters(data, {
        manager: {id: 'all', name: 'Все',filterKey:'id'},
        title: 'Все'
    })
    const cols = React.useMemo(() => [
        {
            Header: 'ID',
            id: 'id',
            width: 10,
            Cell: ({row}) => {

                const data = row?.original
                return <TableLink to={`/${data.id}`} name={data.id}/>
            }
        },
        {
            Header: 'Услуга',
            id: 'title',
            width: 450,
            Cell: ({row}) => {
                const data = row?.original
                return <TableLink to={`/${data.id}`} name={data.title}/>
            },

        },
        {
            Header: '№ договора',
            id: 'contractNumber',
            width: 200,
            Cell: ({row}) => {
                const data = row?.original
                return <p>{data.contractNumber}</p>
            },

        },
        {
            Header: 'Создатель',
            id: 'manager',
            sortType: 'basic',
            accessor: 'manager.name',
            width: 300,
            Cell: ({row}) => {
                const data = row?.original
                return <ManagerCell manager={data.manager}/>
            },

        },
        {
            Header: 'Команда',
            id: 'command',
            width: 200,
            Cell: ({row}) => {
                const data = row?.original
                const fiosInTeam = data.command.map(el => <p>{el.fio}</p>)
                return <Tooltip title={fiosInTeam}>
                    <div><TableLink name={getCorrectWordForm(data.command.length, 'участник')}/></div>
                </Tooltip>
            },

        },
        {
            Header: 'Статус',
            id: 'status',

            Cell: ({row}) => {
                const data = row?.original
                return <Badge classname={styles.badge} status={data.status} statusType={statusTypes.services}/>
            },

        },
        {
            Header: 'Этапы',
            id: 'stages',
            width: 800,


            // flexCol:true,
            // disableResizing:false,
            Cell: ({row}) => {
                const data = row?.original
                const maxCellLength = Math.floor(800 / 18);
                return <StagesCell stages={data.stages} maxCellLength={maxCellLength}/>
            },

        },
    ], [])
    return (
        <div className={styles.table}>
            <Table cardComponent={(data) => (<AdaptiveCard data={data} statusType={statusTypes.services}/>)}
                   headerActions={{
                       filter: {
                           title: 'Фильтр',
                           children: (<FormFilter selectedService={filters?.title}
                                                  selectedManager={filters?.manager}
                                                  onServiceChange={(service) => setFilterValue('title', service)}
                                                  onManagerChange={(manager) => setFilterValue('manager', {...manager,filterKey:'id'})}
                                                  data={servicesStore.services}/>)
                       },
                       add: {
                           action: () => console.log('1234'),
                           title: 'Добавить услугу'
                       }
                   }} title={'Услуги'} data={filteredData} columns={cols}/>
        </div>
    );
});

export default ServicesTable;