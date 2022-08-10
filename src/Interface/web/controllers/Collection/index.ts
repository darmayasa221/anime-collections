import { iCollectionUseCase } from '../../../../Applications/use_case/CollectionUseCase';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setAnimesToCollectionDispatchType } from '../../models/CollectionChart';

export default function CollectionAction(
  useCase: iCollectionUseCase,
  dispatch: setAnimesToCollectionDispatchType,
  dispactAdapter: setDispathcerType,
) {
  // dispactAdapter({ setAnimes: dispatch });
  // useCase.addAnimeToCollection();
  const addAnimeToCollectionAction = (payload: iAnimed) => {
    dispactAdapter({ setAnimeToCollection: dispatch });
    useCase.addAnimeToCollection(payload);
  };
  return {
    addAnimeToCollectionAction,
  };
}
