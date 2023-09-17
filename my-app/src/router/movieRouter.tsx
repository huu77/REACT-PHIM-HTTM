 import Movie from '../'
import TaskList from "../features/TaskList";

export const infoRouter={
    path: "/movies",
    element: <Movie />,
    children: [
        {
            path: "name",
            element: <TaskList />,
        },
      
    ]
}