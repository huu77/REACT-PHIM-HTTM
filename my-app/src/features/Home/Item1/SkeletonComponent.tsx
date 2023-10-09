import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonList = ({ number }: { number: number }) => {
  const skeletons = Array.from({ length: number }).map((_, index) => (
    <div key={index} className="group relative mb-10">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-300 hover:bg-gray-400 transition-all duration-300 ease-in-out">
        <Skeleton height={80} width={100} />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <Skeleton height={20} width={200} />
      </h3>
      <p className="text-base font-semibold text-gray-700 mb-4">
        <Skeleton height={20} width={250} />
      </p>
    </div>
  ));

  return <>{skeletons}</>;
};

export default SkeletonList;
