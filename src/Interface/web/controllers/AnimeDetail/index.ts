import { iGetAnimeDetailUseCase } from '../../../../Applications/use_case/GetAnimeDetailUseCase';
import { setDispathcerType } from '../../dispatcherAdapter/DispatcherAdapter';
import { setAnimeDetailDispatchType } from '../../models/AnimeDetail';

export default function AnimeDetailAction(
  useCase: iGetAnimeDetailUseCase,
  dispatch: setAnimeDetailDispatchType,
  dispactAdapter: setDispathcerType,
  payload: number,
) {
  dispactAdapter({ setAnimeDetail: dispatch });
  useCase.execute(payload);
}
