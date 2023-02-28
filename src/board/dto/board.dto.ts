import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  id: number;

  @IsString()
  date_posted: string;
}
