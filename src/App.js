import logo from './logo.svg';
import './App.css';
import {AppRender} from "./routes/routes.render";
import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import StoreProvider from "./providers/StoreProvider";
import rootApi from './root.api.js'
import useStore from "./hooks/useStore";

function App() {
    const {notificationsStore} = useStore()
    useEffect(() => {
        rootApi.getNotifications().then((result) => {
            notificationsStore.setNotifications(result.body)
        })
    }, []);

    return (
        <AppRender/>
    );
}

export default App;
