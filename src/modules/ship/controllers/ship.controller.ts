import {
  Controller,
  Get,
  Post,
  Body,
  Catch,
  Res,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';

import { Ship } from 'src/modal/shipt.modal';
import { ShipService } from '../services/ship.service';
import { MongoExceptionFilter } from '../../../shared/filter/mongo.interceptor';
import { BadRequestFilter } from 'src/shared/filter/http';

/**
 * @export
 * @class ShipController
 */
@Controller('ships')
export class ShipController {
  constructor(private readonly shipService: ShipService) {}

  /**
   * Fetches list of Ships
   *
   * @public
   * @returns {Promise<Ship[]>}
   * @memberof ShipController
   */
  @Get()
  async findAll(@Res() res) {
    try {
      const shipList = await this.shipService.findAll();
      res.status(HttpStatus.OK).send(shipList);
    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }

  /**
   * Register new ship
   * In have left the response as 201 and not 200 as was stated in the task Doc
   * Just because this endpoint creates new data point.
   *
   * @public
   * @param {Ship} createShipDto
   * @returns {Promise<Ship>}
   * @memberof ShipController
   */
  @Post()
  @UseFilters(BadRequestFilter, MongoExceptionFilter)
  async createOne(@Body() createShipDto: Ship): Promise<Ship> {
    return await this.shipService.create(createShipDto);
  }
}
