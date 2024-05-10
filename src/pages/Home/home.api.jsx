import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import {statusTypes} from "./home.types";
import mocks from './home.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";


mockHttp.onGet('/clients').reply(200, mocks.createClients())
mockHttp.onPost('/clients').reply(200, mocks.createClients())

const useHomeApi = () => {

    mockHttp.onGet('/clients').reply(200, mocks.createClients())
    const {homeStore} = useStore()
    console.log(homeStore,999)
    const getClients = () => {
        return http.get('/clients').then(handleHttpResponse).then((res)=>homeStore.setClients(res.body)).then(()=>homeStore.getClients()).catch(handleHttpError)
    }

    const setClients = (body) => {
        return http.post('/clients',body).then(handleHttpResponse).then((res)=>homeStore.setClients(res.body)).catch(handleHttpError)
    }

    return {setClients,getClients}
}



export default useHomeApi



