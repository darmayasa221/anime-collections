import { apolloClient, gql } from './api/apollo/ApolloClient';
import AnimesRepositoryGql from './repository/AnimesRepositoryGql';
// import GetAmimesUseCase from '../Applications/use_case/GetAnimesUseCase';
import GetAnimeDetailUseCase from '../Applications/use_case/GetAnimeDetailUseCase';
import AnimesRepositoryUseState from './repository/AnimesRepositoryUseState';
// repositoty
const animesRepository = new AnimesRepositoryUseState();
const animesRepositoryGql = new AnimesRepositoryGql(apolloClient, gql);
// use case
// const getAnimesUseCase = new GetAmimesUseCase(animesRepository);
const getAnimeDetailUseCase = new GetAnimeDetailUseCase(
  animesRepositoryGql,
  animesRepository
);

const Container = {
  getAnimeDetailUseCase,
};

export default Container;
