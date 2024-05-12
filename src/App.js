import './App.css';
import React, {useEffect} from "react";
import rootApi from './root.api.js'
import useStore from "./hooks/useStore";
import {prepareRoutes, routes} from "./routes/routes";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

function App() {
    const {notificationsStore} = useStore()
    useEffect(() => {
        rootApi.getNotifications().then((result) => {
            notificationsStore.setNotifications(result.body)
        })
    }, []);

    return React.useMemo(() => (<RouterProvider router={createBrowserRouter(prepareRoutes())}/>), [])
}

export default App;
