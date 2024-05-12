import React, {useEffect} from 'react';
import styles from './clients.module.sass'
import ClientsTable from "./components/ClientsTable";
import {observer} from "mobx-react";
import useStore from "../../hooks/useStore";
import useClientsApi from "./clients.api";
import {Outlet} from "react-router";
import ClientActivities from "./components/ClientPage/Deals";
const Clients = observer(() => {
    const api = useClientsApi()
    useEffect(()=> {
        api.getClients()
    },[])

    return (
        <div className={styles.container}>
            <ClientsTable/>
        </div>
    );
});

export default Clients;