import React, { useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import useStageApi from '../../../../stages.api';
import ManagerCell from '../../../../../../components/ManagerCell';
import styles from '../../../../../Clients/components/ClientsTable/Table.module.sass';
import Table from '../../../../../../shared/Table';
import { formatDateWithDateAndYear } from '../../../../../../utils/formate.date';
import StageBadge, { StageStatuses } from './components/StagesBadge';
import ClientInfo from '../ClientInfo';
import DeadLineTimeCell from './components/DeadLineTimeCell';
import EditModal from './components/EditModal';
import { convertToHours } from '../../../../../../utils/format.time';
import AdaptiveCard from './components/AdaptiveCard';

const StagesTable = observer(({ stage }) => {
  // const
  const api = useStageApi();
  const clientData = React.useMemo(() => stage, [stage]);
  const data = React.useMemo(() => stage?.tasks, [stage?.tasks, stage]);
  const cols = React.useMemo(() => {
    return [
      {
        Header: 'Задача',
        id: 'title',
        accessor: 'title',
        width: '25%',

        Cell: ({ row }) => {
          const data = row?.original;
          return <span>{data.title}</span>;
        },
      },
      {
        Header: 'Статус задачи',
        id: 'status',
        width: '20%',
        // editing: true,
        accessor: 'status',
        Cell: ({ row }) => {
          const data = row?.original;
          return (
            <StageBadge statusType={StageStatuses.tasks} status={data.status} />
          );
        },
      },
      {
        Header: 'Ответственный',
        id: 'responsible',
        width: '25%',
        accessor: 'responsible',
        // editing: true,
        Cell: ({ row }) => {
          const data = row?.original;

          return Array.isArray(data.responsibles) ? (
            data.responsibles.map((el) => <ManagerCell manager={el} />)
          ) : (
            <ManagerCell manager={data.responsible} />
          );
        },
      },
      {
        Header: 'Дедлайн',
        id: 'deadline',
        width: '15%',

        Cell: ({ row }) => {
          const data = row?.original;
          return <span>{formatDateWithDateAndYear(data.deadline)}</span>;
        },
      },
      {
        Header: () => null,
        id: 'deadline_time',
        width: '25%',

        Cell: ({ row }) => {
          const data = row?.original;
          return (
            <DeadLineTimeCell
              deadLine={data.deadlineTime}
              actualTime={data.actualTime}
            />
          );
        },
      },
    ];
  }, [data]);

  const sumActualTime = useMemo(() => {
    const totalHours = stage.tasks.reduce(
      (sum, task) =>
        task.actualTime ? sum + (convertToHours(task.actualTime) || 0) : sum,
      0,
    );
    return totalHours + ' ч';
  }, [data]);

  return (
    <div className={styles.table}>
      <Table
        editComponent={(data) => <EditModal data={data} />}
        classContainer={styles.tableContainer}
        // editComponent={(data, onClose) => <EditModal data={data} />}
        cardComponent={(data) => (
          <AdaptiveCard data={data} statusType={StageStatuses.tasks} />
        )}
        after={<ClientInfo timeActual={sumActualTime} data={clientData} />}
        headerActions={{
          add: {
            action: () => console.log('1234'),
            title: 'Добавить услугу',
          },
        }}
        data={data}
        title={`Этап №${stage.number}`}
        columns={cols}
      />
      {/*{stage && <ClientInfo client={stage.client} />}*/}
    </div>
  );
});

export default StagesTable;
