import { iCollectionUseCase } from '../../../../Applications/use_case/CollectionUseCase';
import { iAnimed } from '../../../../Domains/animes/entities/Anime';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setCollectionsDispatchType } from '../../models/Collections';
import { setCollectionItemDispatchType } from '../../models/CollectionItem';

export default function CollectionItemAction(
  useCase: iCollectionUseCase,
  dispatch: setCollectionItemDispatchType,
  dispactAdapter: setDispathcerType,
) {
  const addCollectionItem = (payload: string) => {
    dispactAdapter({ setCollectinItem: dispatch });
    useCase.addCollectionItem({ nameCollection: payload, animeCollection: [] });
  };
  return { addCollectionItem };
}
