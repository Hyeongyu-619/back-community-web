import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // private를 사용하는 이유는 다른 컴포넌트에서 배열을 수정하지 못하게 하기 위함

  getAllBoards() {
    return this.boards;
  }
}
