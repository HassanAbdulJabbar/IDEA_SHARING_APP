import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeasService } from './data/landing-page.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IdeasService],
})
export class AppModule {}
