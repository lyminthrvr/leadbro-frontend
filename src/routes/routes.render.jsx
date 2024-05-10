import React, {useEffect} from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routes } from './routes';
import Page from '../shared/Page'
import Header from "../shared/Header";



const renderRoutes = (routes,parentPath='') => {
  return routes.map((route, index) => {
    const fullPath = `${parentPath}${route.path}`;
    return <Route
      key={fullPath}
      path={fullPath}
      element={
      <Page titleAfter={route.titleAfter} title={route.title ?? ''}>
        {route.element}
      </Page>}
    >
      {route.subRoutes && (
        <Route>{renderRoutes(route.subRoutes,fullPath)}</Route>
      )}
    </Route>
  }
);
};

export const AppRender = () => {



  return <Routes>
    {renderRoutes(routes)}
  </Routes>
}