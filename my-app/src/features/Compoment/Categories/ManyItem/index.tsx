import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  useState,
  useEffect
} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const apiUrl = import.meta.env.VITE_SOME_KEY;
import { Link } from "react-router-dom";
export default function Example({
  nameTitle,
  data,
  isLoading,
}: {
  nameTitle: string;
  data: any;
  isLoading: boolean;
}) {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">{nameTitle}</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isLoading
            ? data.map(
                (
                  _product: {
                    _id: any;
                    posterUrl: any;
                    imageAlt: string | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    duration:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  key: Key | null | undefined
                ) => (
                  <div key={key} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Skeleton width={"100%"} height={"100%"} />
                    </div>
                    <Skeleton width={"80%"} height={16} className="mt-4" />
                    <Skeleton width={"60%"} height={24} className="mt-1" />
                  </div>
                )
              )
            : data.slice(0, 4).map(
                (
                  product: {
                    _id: any;
                    posterUrl: any;
                    imageAlt: string | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    duration:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <Link to={`/movies/${product?._id}`} className="group" key={index}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-40">
                      <img
                        src={`${apiUrl}${product?.posterUrl}`}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.duration}
                    </p>
                  </Link>
                )
              )}
        </div>
      </div>
    </div>
  );
}
