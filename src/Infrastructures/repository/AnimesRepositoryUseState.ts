export default class AnimesRepositoryUseState {
  setAnimeDetail(payload: any, setState: any) {
    setState((prev: any) => ({
      ...prev,
      loading: false,
      data: { ...payload },
    }));
  }
}
