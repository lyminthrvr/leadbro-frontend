import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import mocks from './services.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";

let blob = new Blob([], {type: 'application/pdf' })
let fakeFile = blob

mockHttp.onGet('/services').reply(200, mocks.createServices())
mockHttp.onPost('/services').reply(200, mocks.createServices())
mockHttp.onGet(`/download/file`).reply(config => {
    return [
        200,
        fakeFile,
    ]
})

const useServiceApi = () => {

    const {servicesStore} = useStore()
    const getServices = () => {
        return http.get('/services').then(handleHttpResponse).then((res)=>servicesStore.setClients(res.body)).then(()=>servicesStore.getClients()).catch(handleHttpError)
    }

    const setServices = (body) => {
        return  http.post('/services',body).then(handleHttpResponse).then((res)=>servicesStore.setClients(res.body)).catch(handleHttpError)
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

    return {setServices,getServices}
}




export default useServiceApi



