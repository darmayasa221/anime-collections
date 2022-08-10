import { iCollectionUseCase } from '../../../../Applications/use_case/CollectionUseCase';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setCollectionDispatchType } from '../../models/Collection';
import { setAnimesToCollectionDispatchType } from '../../models/CollectionAnime';

export default function CollectionAction(
  useCase: iCollectionUseCase,
  dispatch: setCollectionDispatchType | setAnimesToCollectionDispatchType,
  dispactAdapter: setDispathcerType,
) {
  const addAnimeToCollectionAction = (payload: iAnimed) => {
    dispactAdapter({ setAnimeToCollection: dispatch });
    useCase.addAnimeToCollection(payload);
  };
  const addCollectionAction = (payload: string) => {
    useCase.addCollection({ nameCollection: payload, animeCollection: [] });
  };
  return {
    addAnimeToCollectionAction,
    addCollectionAction,
  };
}
