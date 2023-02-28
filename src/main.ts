import { NestFactory } from '@nestjs/core';
import { BoardModule } from './board.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const board = await NestFactory.create(BoardModule);

  await board.listen(3000);
}
bootstrap();
