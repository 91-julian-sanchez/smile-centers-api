import { Test, TestingModule } from '@nestjs/testing';
import { SmileCenterController } from './smile-center.controller';

describe('SmileCenterController', () => {
  let controller: SmileCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmileCenterController],
    }).compile();

    controller = module.get<SmileCenterController>(SmileCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
