import { MailjetModule } from '@clever-app/nestjs-mailjet';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailjetModule.forRoot({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
