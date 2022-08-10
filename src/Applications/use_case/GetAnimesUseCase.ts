import { iAnimesRepository } from '../../Domains/animes/AnimeRepository';
import { iDispatcherAnime } from '../dispatcher/DispatcherAnime';
import { iDispatcherError } from '../dispatcher/DispatcherError';
import { iDispatcherNotification } from '../dispatcher/DispatcherNotification';

export interface iGetAnimesUseCase {
  execute(): Promise<any>;
}

export default class GetAnimesUseCase implements iGetAnimesUseCase {
  private animeRepository: Pick<iAnimesRepository, 'getAnimes'>;

  private dispatcherAnime: Pick<iDispatcherAnime, 'setAnimes'>;

  private dispatcherNotification: iDispatcherNotification;

  private dispatcherError: iDispatcherError;

  constructor(
    animeRepository: Pick<iAnimesRepository, 'getAnimes'>,
    dispatcherAnime: Pick<iDispatcherAnime, 'setAnimes'>,
    dispatcherNotification: iDispatcherNotification,
    dispatcherError: iDispatcherError,
  ) {
    this.animeRepository = animeRepository;
    this.dispatcherAnime = dispatcherAnime;
    this.dispatcherNotification = dispatcherNotification;
    this.dispatcherError = dispatcherError;
  }

  async execute(): Promise<void> {
    let isError = false;
    try {
      const animes = await this.animeRepository.getAnimes();
      this.dispatcherAnime.setAnimes({ ...animes });
    } catch (error) {
      isError = true;
      this.dispatcherError.setError(error as string);
    } finally {
      this.dispatcherNotification.setNotification({ error: isError });
    }
  }
}
