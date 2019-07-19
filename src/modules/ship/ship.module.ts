import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShipSchema } from 'src/db/schemas/ship.schema';
import { ShipController } from './controllers/ship.controller';
import { ShipService } from './services/ship.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ship', schema: ShipSchema }])],
  controllers: [ShipController],
  providers: [ShipService],
})
export class ShipModule {}