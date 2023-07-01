import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ example: 'Cat', description: 'The name of the Category' })
  name: string;

  @ApiProperty({ example: 1, description: 'The id of the Category' })
  id: number;
}

export enum Status {
  AVAILABLE = 'available',
  PENDING = 'pending',
  SOLD = 'sold',
}

export class Pet {
  /**
   * The name of the Pet
   * @example Puppy
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The id of the Pet' })
  id: number;

  @ApiProperty({ description: 'The category of the Pet' })
  category: Category;

  @ApiProperty({ description: 'The list of photo urls' })
  photoUrls: string[];

  status: Status;

  @ApiProperty({ description: 'The list of tags' })
  tags: string[];
}
