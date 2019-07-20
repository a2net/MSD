import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfig } from './config';
import { ShipModule } from './modules/ship/ship.module';

@Module({
  imports: [MongooseModule.forRoot(DbConfig.mongoURI), ShipModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
