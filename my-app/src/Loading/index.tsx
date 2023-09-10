import React from 'react';
import { css } from '@emotion/react';
import { BounceLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  color: string;
  loading: boolean;
  size: number;
}

const override = css`
  display: block;
  margin: 0 auto;
  position:absolute;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, loading, size }) => {
  return (
    <BounceLoader color={color} loading={loading} size={size} css={override} />
  );
};

export default LoadingSpinner;
