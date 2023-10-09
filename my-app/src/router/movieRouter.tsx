 import {Movie, SearchCompoment,ListMovies} from '../features'
 

export const movieRouter={
    path: "/movies",
    element: <Movie />,
    children: [
        {
            path: ":id",
            element: <ListMovies />,
        },
        {
            path: "search",
            element: <SearchCompoment />,
            children: [
              {
                // Sử dụng tham số động "q" trong URL
                path: ":q",
                element: <SearchCompoment />,
              },
            ],
          },
    ]
}