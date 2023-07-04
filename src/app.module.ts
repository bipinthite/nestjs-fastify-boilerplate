import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetModule } from './pet/pet.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/petstore'),
    PetModule,
    StoreModule,
  ],
})
export class AppModule {}
