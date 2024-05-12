import React from 'react';
import styles from './Status.module.sass'
import ManagerCell from "../../ClientsTable/Cells/ManagerCell";
import Badge, {statusTypes} from "../../../../../shared/Badge";
import Card from "../../../../../shared/Card";
import cn from "classnames";

const ClientStatus = ({client,className}) => {
    return (
        <Card className={cn(styles.card, className)}>
            <div className={styles.container}>
                <ManagerCell manager={client?.manager}/>
                <Badge status={client?.status} statusType={statusTypes?.clients} />
            </div>
            <div className={styles.clientId}>
                    <span>{client?.id}</span>
                    <span>ID клиента</span>
            </div>
        </Card>
    );
};

export default ClientStatus;