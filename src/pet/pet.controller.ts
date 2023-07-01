import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Category, Pet } from './entities/pet.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('pets')
@ApiTags('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  @ApiOperation({ summary: 'Create pet' })
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
  @ApiOperation({ summary: 'Find all pets' })
  async findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }
}
