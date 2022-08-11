import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { setAnimeDetailDispatchType } from '../models/AnimeDetail';
import { setAnimesDispatchType } from '../models/Animes';
import { setCollectionsDispatchType } from '../models/Collections';
import { setCollectionItemDispatchType } from '../models/CollectionItem';
import { setErrorDispatchType } from '../models/Error';
import { setNotificationDispatchType } from '../models/Notification';

export type dispatchersObject = {
  [x: string]: (callback: (prev: any) => any) => void;
  setAnimes: setAnimesDispatchType;
  setAnimeDetail: setAnimeDetailDispatchType;
  setError: setErrorDispatchType;
  setNotification: setNotificationDispatchType;
  setCollectionItem: setCollectionItemDispatchType
  setCollections: setCollectionsDispatchType
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
    setCollections() {},
    setCollectionItem() {},
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
