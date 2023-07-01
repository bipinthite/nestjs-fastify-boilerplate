import { IsInt, IsString, IsUrl, MaxLength } from 'class-validator';
import { Status } from '../interfaces/pet.interface';

export class Category {
  @IsInt()
  readonly id: number;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}

export class CreatePetDto {
  @IsString()
  name: string;

  category: Category;

  @IsString({ each: true })
  @MaxLength(10, {
    each: true,
  })
  tags: string[];

  @IsString()
  status: Status;

  @IsUrl({ protocols: ['https'] }, { each: true })
  photo_urls: string[];

  constructor(partial: Partial<CreatePetDto>) {
    Object.assign(this, partial);
  }
}
