/* eslint-disable no-unused-vars */
export interface iDispatcherError {
  setError(error: string): void;
}

export default abstract class DispatcherError implements iDispatcherError {
  setError(error: string): Error {
    throw new Error('DISPATCHER_ERROR.METHOD_NOT_IMPLEMENTED');
  }
}
