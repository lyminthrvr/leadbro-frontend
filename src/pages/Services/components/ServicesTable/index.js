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
import useServiceApi from "../../services.api";
import EditModal from "./components/EditModal";

const ServicesTable = observer(() => {
    const servicesStore = useServices()

    const data = React.useMemo(() => servicesStore?.services, [servicesStore?.drafts])
    console.log(data,'123data')
    const {filteredData, setFilterValue,filters} = useTableFilters(data, {
        manager: {id: 'all', name: 'Все',filterKey:'id'},
        title: 'Все'
    })
    const api = useServiceApi()

    const handleChange = (id,name,payload) => {
        servicesStore.changeById(id,name,payload,true)
    }
    const handleReset = (path) =>{
        // servicesStore.resetDraft(client.id,path)
    }

    const handleSubmit = () => {
        servicesStore.submitDraft()
        api.setClients(servicesStore)
    }

    const cols = React.useMemo(() => [
        {
            Header: 'ID',
            id: 'id',
            accessor: 'id',
            width: 10,
            Cell: ({row}) => {

                const data = row?.original
                return <TableLink to={`/services/${data?.id}`} name={data.id}/>
            }
        },
        {
            Header: 'Услуга',
            id: 'title',
            // editing: true,
            accessor: 'title',
            // onChange:(id,name,value)=>{
            //     if(id === null)
            //         throw new Error()
            //     return handleChange(id,name,value)
            // },
            width: 450,
            Cell: ({row}) => {
                const data = row?.original
                return <TableLink to={`/services/${data.id}`} name={data.title}/>
            },

        },
        {
            Header: '№ договора',
            id: 'contractNumber',
            accessor: 'contractNumber',
            // editing: true,
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

            // accessor: 'conmmand',
            width: 200,
            Cell: ({row}) => {
                const data = row?.original
                const fiosInTeam = data.command.map(el => <p>{el.name} {el.surname}</p>)
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
            editing:false,

            width: 800,
            Cell: ({row}) => {
                const data = row?.original
                const maxCellLength = Math.floor(800 / 18);
                return <StagesCell stages={data.stages} maxCellLength={maxCellLength}/>
            },

        },
    ], [data])
    return (
        <div className={styles.table}>
            <Table editComponent={(data,onClose)=><EditModal data={data}/>} cardComponent={(data) => (<AdaptiveCard data={data} statusType={statusTypes.services}/>)}
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