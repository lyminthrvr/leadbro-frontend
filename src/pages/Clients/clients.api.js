import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import {statusTypes} from "./clients.types";
import mocks from './clients.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";

let blob = new Blob([], {type: 'application/pdf' })
let fakeFile = blob

mockHttp.onGet('/clients').reply(200, mocks.createClients())
mockHttp.onPost('/clients').reply(200, mocks.createClients())
mockHttp.onGet(`/download/file`).reply(config => {
    return [
        200,
        fakeFile,
    ]
})

const useClientsApi = () => {

    mockHttp.onGet('/clients').reply(200, mocks.createClients())
    const {clientsStore} = useStore()
    const getClients = () => {
        return http.get('/clients').then(handleHttpResponse).then((res)=>clientsStore.setClients(res.body)).then(()=>clientsStore.getClients()).catch(handleHttpError)
    }

    const setClients = (body) => {
        return  http.post('/clients',body).then(handleHttpResponse).then((res)=>clientsStore.setClients(res.body)).catch(handleHttpError)
    }

    const downloadFile = (id,fileName) => {
        return http.get(`/download/file`).then((response)=>response.blob()).then(blob=>{
            var url = window.URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = url
            a.download = fileName
            a.click()
            a.remove()
            setTimeout(() => window.URL.revokeObjectURL(url), 100)
        })
    }

    const postFile = (blobFile,fileName) => {
        const form = new FormData()

    }

    return {setClients,getClients}
}




export default useClientsApi



