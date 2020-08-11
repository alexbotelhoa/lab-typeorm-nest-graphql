import { Injectable } from '@nestjs/common';

import RepositoryService from './repository.service';

@Injectable()
export class AppService {

  constructor(private readonly repoService: RepositoryService) {

  }

  async getHello(): Promise<string> {
    return `Total books are ${await this.repoService.bookRepo.count()}`;
  }
}
