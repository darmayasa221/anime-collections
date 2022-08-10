import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { setAnimeDetailDispatchType } from '../models/AnimeDetail';
import { setAnimesDispatchType } from '../models/Animes';
import { setCollectionDispatchType } from '../models/Collection';
import { setAnimesToCollectionDispatchType } from '../models/CollectionAnime';
import { setErrorDispatchType } from '../models/Error';
import { setNotificationDispatchType } from '../models/Notification';

export type dispatchersObject = {
  [x: string]: (callback: (prev: any) => any) => void;
  setAnimes: setAnimesDispatchType;
  setAnimeDetail: setAnimeDetailDispatchType;
  setError: setErrorDispatchType;
  setNotification: setNotificationDispatchType;
  setAnimeToCollection: setAnimesToCollectionDispatchType
  setCollection: setCollectionDispatchType
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
    setCollection() {},
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
