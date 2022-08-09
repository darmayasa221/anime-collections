/* eslint-disable no-unused-vars */
import { useState } from 'react';

export type errorInitialStateType = {
  isError: boolean;
  errorMessage: string;
};
export type setErrorDispatchType = (
  callback: (prev: errorInitialStateType) => errorInitialStateType
) => void;

const ErrorUseState = () => {
  const [error, setError] = useState<errorInitialStateType>({
    isError: false,
    errorMessage: '',
  });
  return [error, setError] as const;
};

export default ErrorUseState;
