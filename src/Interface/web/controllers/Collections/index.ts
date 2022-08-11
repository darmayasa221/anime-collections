import { iCollectionUseCase } from '../../../../Applications/use_case/CollectionUseCase';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setCollectionsDispatchType } from '../../models/Collections';

export default function CollectionsAction(
  useCase: iCollectionUseCase,
  dispatch: setCollectionsDispatchType,
  dispatchAdapter:setDispathcerType,
) {
  dispatchAdapter({ setCollections: dispatch });
  useCase.getCollections();
}
