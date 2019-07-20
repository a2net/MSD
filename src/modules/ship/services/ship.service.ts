import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Ship } from 'src/modal/shipt.modal';

/**
 * @export
 * @class ShipService
 */
@Injectable()
export class ShipService {
  constructor(@InjectModel('Ship') private readonly shipModel: Model<Ship>) {}

  /**
   * @param {Ship} createShipDto
   * @returns {Promise<Ship>}
   * @memberof ShipService
   */
  async create(createShipDto: Ship): Promise<Ship> {
    const createdShip = new this.shipModel(createShipDto);
    return await createdShip.save();
  }

  /**
   * @returns {Promise<Ship[]>}
   * @memberof ShipService
   */
  async findAll(): Promise<Ship[]> {
    return await this.shipModel.find().exec();
  }

  /**
   * @param {Ship['_id']} _id
   * @param {Ship} ship
   * @returns {Promise<Ship>}
   * @memberof ShipService
   */
  async updateOne(_id: Ship['_id'], ship: Ship): Promise<Ship> {
    return await this.shipModel.findOneAndUpdate({_id}, {$set: ship, $inc: { __v: 1 }});
  }

  /**
   * @param {Ship['_id']} _id
   * @returns {Promise<any>}
   * @memberof ShipService
   */
  async deleteOne(_id: Ship['_id']): Promise<any> {
    return await this.shipModel.deleteOne({_id}).then(result => ({deleted: result.deletedCount}));
  }
}
