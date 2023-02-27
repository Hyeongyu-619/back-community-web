import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  owner: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  id: number;
}
