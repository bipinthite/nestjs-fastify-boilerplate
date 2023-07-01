import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  private readonly pets: Pet[] = [];

  create(pet: Pet) {
    console.log('adding pet ', pet);
    this.pets.push(pet);
  }

  findAll(): Pet[] {
    return this.pets;
  }
}
