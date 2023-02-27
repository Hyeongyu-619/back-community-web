import { Controller, Get, Param, Post, Body, Res, Query } from '@nestjs/common';
import { Board } from '../schemas/board.schema';
import { CreateBoardDto } from '../dto/board.dto';
import { BoardsService } from '../service/board.service';
import path from 'path';

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

  @Get('owner/:owner')
  findByOwner(@Param('owner') owner: string) {
    return this.boardsService.findByOwner(owner);
  }

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    try {
      const createdData: Promise<Board> =
        this.boardsService.create(createBoardDto);
      return createdData;
    } catch (err) {
      console.log(err);
    }
  }
}
