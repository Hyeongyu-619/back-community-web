import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() // 값을 주지 않았을때 에러를 발생시키는 파이프
  title: string;

  @IsNotEmpty()
  description: string;
}
