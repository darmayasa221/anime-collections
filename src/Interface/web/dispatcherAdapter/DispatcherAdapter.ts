/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
import { setAnimeDetailDispatchType } from '../models/AnimeDetail';
import { setAnimesDispatchType } from '../models/Animes';
import { setErrorDispatchType } from '../models/Error';
import { setNotificationDispatchType } from '../models/Notification';

export type dispatchersObject = {
  [x: string]: (callback: (prev: any) => any) => void;
  setAnimes: setAnimesDispatchType;
  setAnimeDetail: setAnimeDetailDispatchType;
  setError: setErrorDispatchType;
  setNotification: setNotificationDispatchType;
};

export type setDispathcerType = (dispatcher: {
  [x: string]: (callback: (prev: any) => any) => void;
}) => void;
export interface iDispatcherAdapter {
  dispatchers: dispatchersObject;
  setDispatcher: setDispathcerType;
}

const DispatcherAdapter: iDispatcherAdapter = {
  dispatchers: {
    setAnimes() {},
    setAnimeDetail() {},
    setError() {},
    setNotification() {},
  },
  setDispatcher(dispatcher) {
    const namePropertyDispatcher = Object.getOwnPropertyNames(dispatcher)[0];
    DispatcherAdapter.dispatchers[namePropertyDispatcher] =
      dispatcher[namePropertyDispatcher];
  },
};

export default DispatcherAdapter;
