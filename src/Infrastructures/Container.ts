import GetAnimeDetailUseCase from '../Applications/use_case/GetAnimeDetailUseCase';
import GetAnimesUseCase from '../Applications/use_case/GetAnimesUseCase';
import { apolloClient, gql } from './api/apollo/ApolloClient';
import DispatcherAnimeSetState from './dispatcher/setState/DispatcherAnimeSetState';
import DispatcherErrorSetState from './dispatcher/setState/DispatcherErrorSetState';
import DispatcherNotificationSetState from './dispatcher/setState/DispatcherNotificationSetState';
import AnimeRepositoryApollo from './repository/apollo/AnimeRepositoryApollo';
import DispatcherAdapter from '../Interface/web/dispatcherAdapter/DispatcherAdapter';
import DispatcherCollectionSetState from './dispatcher/setState/DispatcherCollectionSetState';
import CollectionUseCase from '../Applications/use_case/CollectionUseCase';
// Adapter
const { dispatchers, setDispatcher } = DispatcherAdapter;
// service
const animeRepositoryApollo = new AnimeRepositoryApollo(apolloClient, gql);
const dispatcherAnime = new DispatcherAnimeSetState(dispatchers);
const dispatcherError = new DispatcherErrorSetState(dispatchers);
const dispatchCollection = new DispatcherCollectionSetState(dispatchers);
const dispatcherNotification = new DispatcherNotificationSetState(dispatchers);
// use case
const getAnimeDetailUseCase = new GetAnimeDetailUseCase(
  animeRepositoryApollo,
  dispatcherAnime,
  dispatcherNotification,
  dispatcherError,
);
const getAnimesUseCase = new GetAnimesUseCase(
  animeRepositoryApollo,
  dispatcherAnime,
  dispatcherNotification,
  dispatcherError,
);
const collectionUseCase = new CollectionUseCase(dispatchCollection, dispatcherNotification);
const Container = {
  setDispatcher,
  getAnimeDetailUseCase,
  getAnimesUseCase,
  collectionUseCase,
};

export default Container;
