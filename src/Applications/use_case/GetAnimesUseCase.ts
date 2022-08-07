import { iAnimesRepository } from '../../Domains/animes/AnimesRepository';
import Animes from '../../Domains/animes/entities/Animes';

export default class GetAmimesUseCase {
  private animesRepository: iAnimesRepository;

  constructor(animesRepository: iAnimesRepository) {
    this.animesRepository = animesRepository;
  }

  async execute() {
    const animes = await this.animesRepository.getAnimes();
    return new Animes(animes);
  }
}
