import Home from "../pages/Home";
import Button from "../shared/Button ";
import HeaderButton from "../pages/Home/components/HeaderButton";

export const routes =[
      { path: '/', element: <Home/> },
      { path: 'project/', element: <div/>, },
      { path: 'editing/', element: <div/>, },
      { path: 'play/', element: <div/>, },
      {
        path: 'profile/',
        element: <div/>,
        subRoutes: [
          { path: 'my-projects/', element: <div/>, },
          { path: 'information/', element: <div/>, },
          { path: 'security/', element: <div/>, },
        ],
      },
  ]