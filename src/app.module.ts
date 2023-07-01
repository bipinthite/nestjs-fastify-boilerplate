import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [PetModule, StoreModule],
})
export class AppModule {}
