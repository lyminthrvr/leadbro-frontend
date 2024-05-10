import {handleHttpError, handleHttpResponse, http, mockHttp} from "./shared/http";
import mocks from './root.mocks'

mockHttp.onGet("/notifications").reply(200, mocks.createNotifications());
const getNotifications = () => {
    return http.get("/notifications").then(handleHttpResponse).catch(handleHttpError)
}


export default {getNotifications}