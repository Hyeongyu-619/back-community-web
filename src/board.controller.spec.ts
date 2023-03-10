import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

describe('BoardController', () => {
  let boardController: BoardController;

  beforeEach(async () => {
    const board: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [BoardService],
    }).compile();

    boardController = board.get<BoardController>(BoardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(boardController.getHello()).toBe('Hello World!');
    });
  });
});
