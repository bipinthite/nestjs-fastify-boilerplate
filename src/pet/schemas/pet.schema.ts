import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

export class Category {
  @Prop()
  name: string;

  @Prop()
  id: number;
}

export enum Status {
  AVAILABLE = 'available',
  PENDING = 'pending',
  SOLD = 'sold',
}

@Schema()
export class Pet {
  @Prop()
  name: string;

  @Prop()
  id: number;

  @Prop()
  category: Category;

  @Prop()
  tags: string[];

  @Prop()
  photoUrls: string[];

  @Prop()
  status: Status;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
