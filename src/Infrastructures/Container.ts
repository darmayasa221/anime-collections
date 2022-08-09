import GetAnimeDetailUseCase from '../Applications/use_case/GetAnimeDetailUseCase';
import GetAnimesUseCase from '../Applications/use_case/GetAnimesUseCase';
import { apolloClient, gql } from './api/apollo/ApolloClient';
import DispatcherAnimeSetState from './dispatcher/setState/DispatcherAnimeSetState';
import DispatcherErrorSetState from './dispatcher/setState/DispatcherErrorSetState';
import DispatcherNotificationSetState from './dispatcher/setState/DispatcherNotificationSetState';
import AnimeRepositoryApollo from './repository/apollo/AnimeRepositoryApollo';
import DispatcherAdapter from '../Interface/web/dispatcherAdapter/DispatcherAdapter';
// Adapter
const { dispatchers, setDispatcher } = DispatcherAdapter;
// service
const animeRepositoryApollo = new AnimeRepositoryApollo(apolloClient, gql);
const dispatcherAnime = new DispatcherAnimeSetState(dispatchers);
const dispatcherError = new DispatcherErrorSetState(dispatchers);
const dispatcherNotification = new DispatcherNotificationSetState(dispatchers);
// use case
const getAnimeDetailUseCase = new GetAnimeDetailUseCase(
  animeRepositoryApollo,
  dispatcherAnime,
  dispatcherNotification,
  dispatcherError
);
const getAnimesUseCase = new GetAnimesUseCase(
  animeRepositoryApollo,
  dispatcherAnime,
  dispatcherNotification,
  dispatcherError
);
const Container = {
  setDispatcher,
  getAnimeDetailUseCase,
  getAnimesUseCase,
};

export default Container;
