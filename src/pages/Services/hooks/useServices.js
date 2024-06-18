import React, {useEffect} from 'react';
import useStore from "../../../hooks/useStore";
import useClientsApi from "../../Clients/clients.api";
import useServiceApi from "../services.api";

const UseServices = () => {
    const {servicesStore} = useStore()
    const api = useServiceApi()
    useEffect(() => {
        async function getServices(){
            if(!servicesStore.services.length)
                return api.getServices()
        }
        getServices().catch(console.error)
    }, [servicesStore.services,api]);

    return servicesStore;
};

export default UseServices;