import { Injectable } from '@nestjs/common';
import { IdeasService } from './data/landing-page.service';

@Injectable()
export class AppService {
  constructor(private readonly ideaService: IdeasService) {}
  getHello(): object {
    return {
      message: 'App is running fine!',
    };
  }
  getLandingPageData() {
    return this.ideaService.getAllIdeas();
  }
}
