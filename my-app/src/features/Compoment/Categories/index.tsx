import { useDispatch, useSelector } from "react-redux";
import { listMovies } from "../../../redux/slice/moviesSlice";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/reducer";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_SOME_KEY;
 
export interface movieInterface {
  nameTitle: string;
}
export default function index({ nameTitle }: movieInterface) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);
  const { movies, loading }: { movies: any; loading: boolean } = useSelector(
    (state: RootState) => ({
      movies: state.movies.movies, // Adjust the path to the movies state as needed
      loading: state.movies.loading,
    })
  );

  return (
    <div className="bg-transparent -mb-150 -mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">{nameTitle}</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {movies.map(
              (
                callout: {
                  duration: ReactNode;
                  posterUrl: string | undefined;
                  title: ReactNode;
                  _id: string;
                  name:
                    | boolean
                    | Key
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined;
                  imageSrc: string | undefined;
                  imageAlt: string | undefined;
                  href: string | undefined;
                  description:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: any
              ) => (
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`${apiUrl}/${callout?.posterUrl}`}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                   <Link to={`/movies/${callout?._id}`}>
                      <span className="absolute inset-0" />
                      {callout.duration}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.title}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function dispatch(
  arg0: AsyncThunkAction<
    unknown,
    void,
    {
      state?: unknown;
      dispatch?: Dispatch<AnyAction> | undefined;
      extra?: unknown;
      rejectValue?: unknown;
      serializedErrorType?: unknown;
      pendingMeta?: unknown;
      fulfilledMeta?: unknown;
      rejectedMeta?: unknown;
    }
  >
) {
  throw new Error("Function not implemented.");
}
