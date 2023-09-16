import {
    createBrowserRouter,

} from "react-router-dom";
import { Err404, Login, Register, Wellcomepage } from "../features";

import { homeRouter } from "./homeRouter";
import { infoRouter } from "./infoRouter";



export const routers = createBrowserRouter(
    [{
        path: "/",
        element: <Wellcomepage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <Err404 />,
    },
        homeRouter,
        infoRouter
    ])