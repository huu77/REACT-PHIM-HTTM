 import {Movie} from '../features'
import TaskList from "../features/TaskList";

export const movieRouter={
    path: "/movies",
    element: <Movie />,
    children: [
        {
            path: "",
            element: <TaskList />,
        },
      
    ]
}