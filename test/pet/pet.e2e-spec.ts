import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { PetModule } from '../../src/pet/pet.module';
import { PetService } from '../../src/pet/pet.service';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('Pets', () => {
  let app: NestFastifyApplication;
  const petService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PetModule],
    })
      .overrideProvider(PetService)
      .useValue(petService)
      .compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it(`/GET pets`, () => {
    return request(app.getHttpServer())
      .get('/pets')
      .expect(200)
      .expect(petService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
