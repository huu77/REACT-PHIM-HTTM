 import {Movie, MovieItem,ListMovies} from '../features'
 

export const movieRouter={
    path: "/movies",
    element: <Movie />,
    children: [
        {
            path: ":id",
            element: <ListMovies />,
        },
     
    ]
}