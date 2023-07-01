import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Category, Pet } from './interfaces/pet.interface';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    console.log('Create pet with request ', createPetDto);
    console.log('photoUrls ', createPetDto.photo_urls);
    const category: Category = {
      id: createPetDto.category.id,
      name: '',
    };

    const pet: Pet = {
      name: createPetDto.name,
      id: 0,
      category: category,
      tags: createPetDto.tags,
      status: createPetDto.status,
      photoUrls: createPetDto.photo_urls,
    };

    this.petService.create(pet);
  }

  @Get()
  async findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }
}
