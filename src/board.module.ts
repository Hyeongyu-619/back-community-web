import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsModule } from './board/module/board.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://infodba:infodba@cluster0.hlkbooe.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    BoardsModule,
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
