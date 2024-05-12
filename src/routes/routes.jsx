import Clients from "../pages/Clients";
import Button from "../shared/Button ";
import ClientPage from "../pages/Clients/components/ClientPage";
import Page from "../shared/Page";
import React from "react";
import {Outlet} from "react-router";

export const paths = {
    CLIENTS:'/',
    CLIENTS_ID:'/:id'
}

const routes = [
    {
        path: paths.CLIENTS, element:  <Page><Clients/></Page>,
    },
    {path: paths.CLIENTS_ID, element: <Page ><ClientPage/></Page>},
    {path: 'project', element: <div/>,},
    {path: 'editing', element: <div/>,},
    {path: 'play', element: <div/>,},
    {
        path: 'profile',
        element: <div>123566</div>,
    }
]

export const prepareRoutes = () => {
    const prepareRoute = (el) => {
        el.element =
            <>
                <Page>
                    {el.element}
                </Page>
            </>
        // if (el.children) {
        //     // el.children.map((sub) => prepareRoute(sub))
        // }
        return el
    }
    return routes
}