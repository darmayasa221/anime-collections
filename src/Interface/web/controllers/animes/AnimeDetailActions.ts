export default function AnimeDetailActions(
  payload: any,
  useCase: any,
  // eslint-disable-next-line comma-dangle
  dispatch: any
) {
  useCase.execute(payload, dispatch);
}
