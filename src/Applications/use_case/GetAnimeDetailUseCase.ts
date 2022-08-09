import { iAnimesRepository } from '../../Domains/animes/AnimeRepository';
import { iDispatcherAnime } from '../dispatcher/DispatcherAnime';
import { iDispatcherError } from '../dispatcher/DispatcherError';
import { iDispatcherNotification } from '../dispatcher/DispatcherNotification';

export interface iGetAnimeDetailUseCase {
  execute(payload: number): Promise<any>;
}

export default class GetAnimeDetailUseCase implements iGetAnimeDetailUseCase {
  private animeRepository: Pick<iAnimesRepository, 'getAnimeById'>;

  private dispatcherAnime: Pick<iDispatcherAnime, 'setAnimeDetail'>;

  private dispatcherNotification: iDispatcherNotification;

  private dispatcherError: iDispatcherError;

  constructor(
    animeRepository: Pick<iAnimesRepository, 'getAnimeById'>,
    dispatcherAnime: Pick<iDispatcherAnime, 'setAnimeDetail'>,
    dispatcherNotification: iDispatcherNotification,
    dispatcherError: iDispatcherError,
  ) {
    this.animeRepository = animeRepository;
    this.dispatcherAnime = dispatcherAnime;
    this.dispatcherNotification = dispatcherNotification;
    this.dispatcherError = dispatcherError;
  }

  async execute(payload: number): Promise<void> {
    let isError = false;
    try {
      const anime = await this.animeRepository.getAnimeById(payload);
      this.dispatcherAnime.setAnimeDetail({ ...anime });
    } catch (error) {
      isError = true;
      this.dispatcherError.setError(error as string);
    } finally {
      this.dispatcherNotification.setNotification({ error: isError });
    }
  }
}
