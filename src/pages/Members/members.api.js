import {handleHttpError, handleHttpResponse, http, mockHttp} from "../../shared/http";
import mocks from './members.mocks'
import useStore from "../../hooks/useStore";
import {useEffect, useRef} from "react";


mockHttp.onGet('/members').reply(200, mocks.createMembers())
mockHttp.onPost('/members').reply(200, mocks.createMembers())


const useMembersApi = () => {

    mockHttp.onGet('/members').reply(200, mocks.createMembers())
    const {membersStore} = useStore()
    const getMembers = () => {
        return http.get('/members').then(handleHttpResponse).then((res)=>membersStore.setMembers(res.body)).then(()=>membersStore.getMembers()).catch(handleHttpError)
    }

    const setMembers = (body) => {
        return  http.post('/members',body).then(handleHttpResponse).then((res)=>membersStore.setMembers(res.body)).catch(handleHttpError)
    }
    



    return {setMembers,getMembers}
}




export default useMembersApi



