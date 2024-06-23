import { Test, TestingModule } from '@nestjs/testing';
import { SmileCenterService } from './smile-centers.service';

describe('SmileCenterService', () => {
  let service: SmileCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmileCenterService],
    }).compile();

    service = module.get<SmileCenterService>(SmileCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
