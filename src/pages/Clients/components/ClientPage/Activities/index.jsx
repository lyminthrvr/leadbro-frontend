import React, {useMemo} from 'react';
import Table from "../../../../../shared/Table";
import {formatDate, formatDateWithoutHours, formatHours} from "../../../../../utils/formate.date";
import uuid from "draft-js/lib/uuid";
import styles from './Activities.module.sass'
import DealCell from "./ActivityCell";
import ManagerCell from "../../../../../components/ManagerCell";
import ActivityType from "./Type";
import EmptyCell from "../../../../../shared/Table/EmptyCell";
import AdaptiveCard from "./AdaptiveCard";
import cn from "classnames";

const ClientActivities = ({activities}) => {
    const groupByDate = (items) => {
        return items?.reduce((acc, item) => {
            const date = new Date(item.date);
            date.setDate(date.getDate()+1)
            const dateString = date.toISOString().split('T')[0]; // Извлекаем YYYY-MM-DD

            if (!acc[dateString]) {
                acc[dateString] = [];
            }
            acc[dateString].push(item);

            return acc;
        }, {});
    };


    const columns = useMemo(() => {
        return activities?.map((el,index) => (
            {
                Header: index === 0 || activities[index - 1].date !== el.date ?
                    <div className={cn(styles.header,{[styles.header_first]:index===0})}>{formatDateWithoutHours(el.date)}</div> :  <></>,
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
                        id:`${index}_empty`,
                        Cell:({ row }) => {
                            return <EmptyCell/>
                        }

                    },

                    {
                        'Header': ()=>null,
                        id:`${index}_manager`,
                        Cell:({ row }) => {
                            return <ManagerCell className={styles.cell_manager} manager={row.original.assignee}/>
                        }

                    },
                    {
                        'Header': ()=>null,
                        id:`${index}_type`,
                        Cell:({ row }) => {
                            return <ActivityType className={styles.types} type={row.original.type} membersCount={row.original.members}/>
                        }

                    },
                ]
            }))
    }, [activities])
    const data = useMemo(() => activities ?? [], activities)
    return (
        <div>
            <Table disableHeader={true} smallTable={true} headerInCard={true} cardComponent={(data,onPagination) => (<AdaptiveCard data={data} onPagination={onPagination}/>)}
                   headerActions={{
                       sorting: true,
                       add: {
                           action: () => console.log('1234'),
                           title: ''
                       }
                   }} onPagination={true} title={'Дела'} data={data ?? []} columns={columns ?? []}/>
        </div>
    );
};

export default ClientActivities;