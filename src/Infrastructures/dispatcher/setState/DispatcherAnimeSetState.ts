import DispatcherAnime from '../../../Applications/dispatcher/DispatcherAnime';
import { iAnimedDetail } from '../../../Domains/animes/entities/AnimeDetail';
import { iAnimesed } from '../../../Domains/animes/entities/Animes';
import { dispatchersObject } from '../../../Interface/web/dispatcherAdapter/DispatcherAdapter';

export default class DispatcherAnimeSetState extends DispatcherAnime {
  private dispatch: dispatchersObject;

  constructor(dispatch: dispatchersObject) {
    super();
    this.dispatch = dispatch;
  }

  setAnimes(payload: iAnimesed): void {
    this.dispatch.setAnimes((prev) => ({
      ...prev,
      isLoading: false,
      data: payload.data,
    }));
  }

  setAnimeDetail(payload: iAnimedDetail): void {
    this.dispatch.setAnimeDetail((prev) => ({
      ...prev,
      isLoading: false,
      data: payload,
    }));
  }
}
