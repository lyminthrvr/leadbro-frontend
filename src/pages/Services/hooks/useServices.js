import React, {useEffect} from 'react';
import useStore from "../../../hooks/useStore";
import useClientsApi from "../../Clients/clients.api";
import useServiceApi from "../services.api";

const UseServices = () => {
    const {servicesStore} = useStore()
    const api = useServiceApi()
    useEffect(() => {
        async function getServices(){
            if(!servicesStore.clients.length)
                api.getClients()
        }
        getServices().catch(console.error)
    }, [servicesStore,api]);
    return servicesStore;
};

export default UseServices;