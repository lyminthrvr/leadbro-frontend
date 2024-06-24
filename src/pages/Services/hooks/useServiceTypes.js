import React, {useEffect} from 'react';
import useStore from "../../../hooks/useStore";
import useClientsApi from "../../Clients/clients.api";
import useServiceApi from "../services.api";

const UseServiceTypes = () => {
    const {servicesStore} = useStore()
    const api = useServiceApi()
    useEffect(() => {
        async function getServiceTypes(){
            debugger
            if(!servicesStore.serviceTypes.length)
                return api.getServiceTypes()
        }
        getServiceTypes().catch(console.error)
    }, [servicesStore.serviceTypes,servicesStore.drafts,api]);

    return servicesStore.serviceTypes;
};

export default UseServiceTypes;