import {  Dashboard } from "../features";

import TaskList from "../features/TaskList";

export const dashboardRouter={
    path: "/dashboard",
    element: <Dashboard />,
    children: [
        {
            path: "",
            element: <TaskList />,
        },
      
    ]
}