import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Res,
  Query,
  Put,
  NotFoundException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { Board } from '../schemas/board.schema';
import { CreateBoardDto } from '../dto/board.dto';
import { BoardsService } from '../service/board.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import path from 'path';
import { query } from 'express';

@Controller('boards')
export class BoardsController {
  // Service 호출
  constructor(private readonly boardsService: BoardsService) {}

  @Get('all')
  findAll() {
    // 향후 직렬화 구현필요
    return this.boardsService.findAll();
  }

  @Get('id/:id')
  findById(@Param('id') id: number) {
    return this.boardsService.findById(id);
  }

  @Get('author/:author')
  findByAuthor(@Param('author') author: string) {
    return this.boardsService.findByAuthor(author);
  }

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    try {
      const createdData: Promise<Board> =
        this.boardsService.createBoard(createBoardDto);
      return createdData;
    } catch (err) {
      console.log(err);
    }
  }

  @Put('/edit')
  async editBoard(
    @Res() res,
    @Query('id', new ValidateObjectId()) id,
    @Body() createBoardDTO: CreateBoardDto,
  ) {
    const editedBoard = await this.boardsService.editBoard(id, createBoardDTO);
    if (!editedBoard) {
      throw new NotFoundException('Board does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Board has been successfully updated',
      board: editedBoard,
    });
  }

  @Delete('/delete')
  async deletePost(@Res() res, @Query('id', new ValidateObjectId()) id) {
    const deletedPost = await this.boardsService.deleteBoard(id);
    if (!deletedPost) {
      throw new NotFoundException('board does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
