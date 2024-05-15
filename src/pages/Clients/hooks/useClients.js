import React, {useEffect} from 'react';
import useStore from "../../../hooks/useStore";
import useClientsApi from "../clients.api";

const useClients = () => {
    const {clientsStore} = useStore()
    const api = useClientsApi()
    useEffect(() => {
        async function getClients(){
            if(!clientsStore.clients.length)
                api.getClients()
        }
        getClients().catch(console.error)
    }, [clientsStore,api]);
    return clientsStore;
};

export default useClients;