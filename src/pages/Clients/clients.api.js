import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import {statusTypes} from "./clients.types";
import mocks from './clients.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";


mockHttp.onGet('/clients').reply(200, mocks.createClients())
mockHttp.onPost('/clients').reply(200, mocks.createClients())

const useClientsApi = () => {

    mockHttp.onGet('/clients').reply(200, mocks.createClients())
    const {clientsStore} = useStore()
    const getClients = () => {
        return http.get('/clients').then(handleHttpResponse).then((res)=>clientsStore.setClients(res.body)).then(()=>clientsStore.getClients()).catch(handleHttpError)
    }

    const setClients = (body) => {
        return  http.post('/clients',body).then(handleHttpResponse).then((res)=>clientsStore.setClients(res.body)).catch(handleHttpError)
    }

    return {setClients,getClients}
}



export default useClientsApi



