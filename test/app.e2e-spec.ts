import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BoardModule } from '../src/board.module';

describe('AppController (e2e)', () => {
  let board: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BoardModule],
    }).compile();

    board = moduleFixture.createNestApplication();
    await board.init();
  });

  it('/ (GET)', () => {
    return request(board.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
