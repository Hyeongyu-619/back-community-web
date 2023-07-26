import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  providers: [BoardsService],
  controllers: [BoardsController],
})
export class BoardsModule {}
