import {  Info } from "../features";
import { Categories,SlideComponent } from "../features/Compoment";
import TaskList from "../features/TaskList";

export const infoRouter={
    path: "/info",
    element: <Info />,
    children: [
        {
            path: "",
            element: <TaskList />,
        },
      
    ]
}