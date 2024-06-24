import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import mocks from './services.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";

let blob = new Blob([], {type: 'application/pdf' })
let fakeFile = blob

mockHttp.onGet('/services').reply(200, mocks.createServices())
mockHttp.onPost('/services').reply(200, mocks.createServices())
mockHttp.onGet('/services/types').reply(200, mocks.createServiceTypes())
mockHttp.onGet(`/download/file`).reply(config => {
    return [
        200,
        fakeFile,
    ]
})

const useServiceApi = () => {

    const {servicesStore} = useStore()
    const getServices = () => {
        return http.get('/services').then(handleHttpResponse).then((res)=>servicesStore.setServices(res.body)).then(()=>servicesStore.getServices()).catch(handleHttpError)
    }

    const setServices = (body) => {
        return  http.post('/services',body).then(handleHttpResponse).then((res)=>servicesStore.setServices(res.body)).catch(handleHttpError)
    }

    const getServiceTypes = () => {
        return http.get('/services/types').then(handleHttpResponse).then((res)=>servicesStore.setServiceTypes(res.body)).then(()=>servicesStore.getServiceTypes()).catch(handleHttpError)
    }



    const postFile = (blobFile,fileName) => {
        const form = new FormData()

    }

    return {setServices,getServices,getServiceTypes}
}




export default useServiceApi



