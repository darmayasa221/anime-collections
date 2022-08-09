/* eslint-disable no-unused-vars */
import { iGetAnimesUseCase } from '../../../../Applications/use_case/GetAnimesUseCase';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setAnimesDispatchType } from '../../models/Animes';

export default function AnimesAction(
  useCase: iGetAnimesUseCase,
  dispatch: setAnimesDispatchType,
  dispactAdapter: setDispathcerType
) {
  dispactAdapter({ setAnimes: dispatch });
  useCase.execute();
}
