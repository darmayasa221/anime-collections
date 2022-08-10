import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { setAnimeDetailDispatchType } from '../models/AnimeDetail';
import { setAnimesDispatchType } from '../models/Animes';
import { setAnimesToCollectionDispatchType } from '../models/CollectionChart';
import { setErrorDispatchType } from '../models/Error';
import { setNotificationDispatchType } from '../models/Notification';

export type dispatchersObject = {
  [x: string]: (callback: (prev: any) => any) => void;
  setAnimes: setAnimesDispatchType;
  setAnimeDetail: setAnimeDetailDispatchType;
  setError: setErrorDispatchType;
  setNotification: setNotificationDispatchType;
  setAnimeToCollection: setAnimesToCollectionDispatchType
};

export type setDispathcerType = (dispatcher: {
  [x: string]: (callback: (prev: any) => any) => void;
}| Array<{[x: string]: (callback: (prev: any) => any) => void}>) => void;
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
    setAnimeToCollection() {},
  },
  setDispatcher(dispatcher) {
    if (!isArray(dispatcher)) {
      const namePropertyDispatcher = Object.getOwnPropertyNames(dispatcher)[0];
      DispatcherAdapter.dispatchers[namePropertyDispatcher] = dispatcher[namePropertyDispatcher];
    } else {
      dispatcher.forEach((dispatch) => {
        const namePropertyDispatcher = Object.getOwnPropertyNames(dispatch)[0];
        DispatcherAdapter.dispatchers[namePropertyDispatcher] = dispatch[namePropertyDispatcher];
      });
    }
  },
};

export default DispatcherAdapter;
