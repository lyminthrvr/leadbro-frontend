import React, {useMemo} from 'react';
import Table from "../../../../../shared/Table";
import AdaptiveCard from "../Services/AdaptiveCard";
import {formatDate, formatDateWithoutHours, formatHours} from "../../../../../utils/formate.date";
import uuid from "draft-js/lib/uuid";
import styles from './Activities.module.sass'
import DealCell from "./ActivityCell";
import ManagerCell from "../../ClientsTable/Cells/ManagerCell";

const ClientActivities = ({activities}) => {

    const columns = useMemo(() => {
        return activities?.map((el,index) => (
            {
                'Header': <div className={styles.header}>{formatDateWithoutHours(el.time)}</div>,
                id:`activities_${index}`,
                columns:[
                    {
                        'Header': ()=>null,
                        id:`${index}_description`,
                        Cell:({ row }) => {
                            return <DealCell title={row.original.description} time={formatHours(row.original.time)}/>
                        }

                    },
                    {
                        'Header': ()=>null,
                        id:`${index}_t`,
                        Cell:({ row }) => {
                            return <ManagerCell className={styles.cell_manager} manager={row.original.assignee}/>
                        }

                    },
                ]
            }),[])
    }, [activities])
    const data = useMemo(() => activities ?? [], activities)
    return (
        <div>
            <Table disableHeader={true} smallTable={true} headerInCard={true} cardComponent={(data) => (<AdaptiveCard data={data}/>)}
                   headerActions={{
                       sorting: true,
                       add: {
                           action: () => console.log('1234'),
                           title: ''
                       }
                   }} title={'Дела'} data={data ?? []} columns={columns ?? []}/>
        </div>
    );
};

export default ClientActivities;