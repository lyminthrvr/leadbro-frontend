import React, {useEffect} from 'react';
import styles from './Home.module.sass'
import ClientsTable from "./components/ClientsTable";
import {observer} from "mobx-react";
import useStore from "../../hooks/useStore";
import homeApi from "./home.api";
import useHomeApi from "./home.api";
const Home = observer(() => {
    const homeApi = useHomeApi()
    useEffect(()=> {
        homeApi.getClients()
    },[])

    return (
        <div className={styles.container}>
            <ClientsTable/>
        </div>
    );
});

export default Home;