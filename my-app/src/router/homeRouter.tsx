import { Home } from "../features";
import { Categories,SlideComponent } from "../features/Compoment";
import TaskList from "../features/TaskList";

export const homeRouter={
    path: "/home",
    element: <Home />,
    children: [
        {
            path: "",
            element: <Categories />,
        },
        {
            path: "test1",
            element: <SlideComponent />,
        }
    ]
}