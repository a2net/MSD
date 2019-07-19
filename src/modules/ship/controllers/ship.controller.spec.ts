import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ShipController } from './ship.controller';
import { ShipService } from '../services/ship.service';
import { Ship } from '../../../modal/shipt.modal';

describe('ShipController', () => {
    let shipController: ShipController;

    beforeEach(async () => {

        const shipModal = {} as Ship;
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ShipController],
            providers: [ShipService, {
                provide: getModelToken('Ship'),
                useValue: shipModal,
            }],
        }).compile();

        shipController = app.get<ShipController>(ShipController);
    });

    describe('get ships', () => {
        it('Method should exist', () => {
            expect(shipController.findAll).toBeTruthy();
        });
    });
});
