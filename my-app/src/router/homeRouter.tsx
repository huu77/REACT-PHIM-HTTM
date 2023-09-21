import { Home, Item1, Item2, Item3 } from "../features";
import { SlideComponent } from "../features/Compoment";
import TaskList from "../features/TaskList";

export const homeRouter={
    path: "/home",
    element: <Home />,
    children: [
        {
            path: "",
            element: <Item1 />,
        },
        {
            path: "test1",
            element:<Item2/>,
        },
        {
            path: "test2",
            element:<Item3/>,
        },
    ]
}