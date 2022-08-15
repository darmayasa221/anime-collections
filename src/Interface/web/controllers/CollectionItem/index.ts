import { iCollectionUseCase } from '../../../../Applications/use_case/CollectionUseCase';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setCollectionItemDispatchType } from '../../models/CollectionItem';

export default function CollectionItemAction(
  useCase: iCollectionUseCase,
  dispatch: setCollectionItemDispatchType,
  dispactAdapter: setDispathcerType,
) {
  const addCollectionItemAction = (payload: string) => {
    dispactAdapter({ setCollectinItem: dispatch });
    useCase.addCollectionItem({ nameCollection: payload, animeCollection: [] });
  };
  return { addCollectionItemAction };
}
