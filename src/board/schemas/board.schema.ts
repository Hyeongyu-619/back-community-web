import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type BoardData = HydratedDocument<Board>;

@Schema()
export class Board {
  @Prop()
  id: number;

  @Prop()
  owner: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
