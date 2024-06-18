import styles from './Bills.module.sass'
import {formatDateWithoutHours} from "../../../../../../utils/formate.date";
import React, {useMemo} from "react";
import TextLink from "../../../../../../shared/Table/TextLink";
import ManagerCell from "../../../../../../components/ManagerCell";
import {formatSum} from "../../../../../../utils/format.number";
import ServiceBadge, {serviceStatuses} from "../Statuses";
import Table from "../../../../../../shared/Table";
import AdaptiveCard from "../../../../../Clients/components/ClientPage/Deals/AdaptiveCard";
import Button from "../../../../../../shared/Button ";
import Icon from "../../../../../../shared/Icon";
const Bills = ({ bills }) => {
    const cols =  React.useMemo(() => [
        {
            Header: '№ счета',
            id: 'title',
            width:'17%',
            Cell: ({row}) => {
                const data = row?.original
                return <TextLink>{data.title}</TextLink>
            },

        },
        {
            Header: '',
            width:'21%',
            id: 'billWithSign',
            Cell: ({row}) => {
                return <Button  type={'secondary'} after={<Icon size={24} name={'download'}/>} classname={styles.button} name={'Счет с печатью'}/>
            },

        },
        {
            Header: '',
            width:'18%',

            id: 'billWithoutSign',
            Cell: ({row}) => {
                return <Button  type={'secondary'} after={<Icon size={24} name={'download'}/>} classname={styles.button} name={'Счет без печати'}/>
            },

        },


        {
            Header: 'Сумма',
            width:'20%',

            id: 'sum',
            Cell: ({row}) => {
                const data = row?.original
                return <p>{data.sum.toFixed(2)}</p>
            },

        },
        {
            Header: 'Статус',
            width:'20%',

            id: 'status',

            Cell: ({row}) => {
                const data = row?.original
                return <ServiceBadge status={data.status} statusType={serviceStatuses.bill}/>
            },

        },
        {
            Header: 'Дата оплаты',
            id: 'date',
            width:'30%',

            Cell: ({row}) => {
                const data = row?.original
                return <p>{formatDateWithoutHours(data.payedDate)}</p>
            },

        },
    ], [])
    const data = useMemo(()=>bills??[],bills)

    return (
        <div className={styles.table_container}>
            <Table smallTable={true}  cardComponent={(data,onPagination)=><AdaptiveCard data={data} onPagination={onPagination} />} headerActions={{
                add: {
                    isSmall:false,
                    cls:`${styles.button} ${styles.button_title}`,
                    type:'secondary',
                    title:'Добавить счет'
                }
            }}  title={'Счета'} data={data} columns={cols}/>
        </div>
    );
    // return (
    //     <div className="bills">
    //         {bills.map(bill => (
    //             <div key={bill.id}>
    //                 <span>{bill.title}</span>
    //                 <button>{bill.withoutSign.file}</button>
    //                 <button>{bill.withSign.file}</button>
    //                 <span>{bill.sum}₽</span>
    //                 <span>{bill.status}</span>
    //                 <span>{formatDateWithoutHours(bill.payedDate)}</span>
    //             </div>
    //         ))}
    //     </div>
    // );
};

export default Bills;