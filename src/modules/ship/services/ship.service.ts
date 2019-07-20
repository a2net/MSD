import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Ship } from 'src/modal/shipt.modal';

@Injectable()
export class ShipService {
  constructor(@InjectModel('Ship') private readonly shipModel: Model<Ship>) {}

  async create(createShipDto: Ship): Promise<Ship> {
    const createdShip = new this.shipModel(createShipDto);
    return await createdShip.save();
  }

  async findAll(): Promise<Ship[]> {
    return await this.shipModel.find().exec();
  }
}
