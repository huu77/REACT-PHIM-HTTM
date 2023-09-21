 import {Movie, MovieItem} from '../features'
 

export const movieRouter={
    path: "/movies",
    element: <Movie />,
    children: [
        {
            path: "",
            element: <MovieItem />,
        },
      
    ]
}