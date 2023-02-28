import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board, BoardData } from '../schemas/board.schema';
import { CreateBoardDto } from '../dto/board.dto';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private boardModel: Model<BoardData>) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdBoard = new this.boardModel(createBoardDto);
    return createdBoard.save();
  }

  async editBoard(id: number, createBoardDto: CreateBoardDto): Promise<Board> {
    const editedBoard = await this.boardModel.findByIdAndUpdate(
      id,
      createBoardDto,
      { new: true },
    );
    return editedBoard;
  }

  async deleteBoard(id: number): Promise<any> {
    const deletedBoard = await this.boardModel.findByIdAndRemove(id);
    return deletedBoard;
  }

  async findAll(): Promise<Board[]> {
    try {
      return this.boardModel.find().exec();
    } catch (err) {
      console.log('{} Error', err);
    }
  }

  async findById(id: number): Promise<Board[]> {
    try {
      Logger.log('AA');
      return this.boardModel.findOne({ id: id });
    } catch (err) {
      console.log('{} Error', err);
    }
  }

  async findByAuthor(author: string): Promise<Board[]> {
    try {
      return this.boardModel.findOne({ author: author });
    } catch (err) {
      console.log('{} Error', err);
    }
  }
}
