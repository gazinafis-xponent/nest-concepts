import { Test, TestingModule } from '@nestjs/testing';
import { Hello } from './hello';

describe('Hello', () => {
  let provider: Hello;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hello],
    }).compile();

    provider = module.get<Hello>(Hello);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
