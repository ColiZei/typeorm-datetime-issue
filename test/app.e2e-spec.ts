import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { IsNull, Not, Repository } from 'typeorm';
import { TestTable } from '../src/test.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let repo: Repository<TestTable>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    repo = moduleFixture.get(getRepositoryToken(TestTable));
    await app.init();
  });

  beforeEach(async () => {
    await repo.delete({ id: Not(IsNull()) });
  });

  it('/ (GET)', async () => {
    const data = await repo.save(
      repo.create({
        content: 'foo',
        startAt: new Date('2023-04-22 10:40:00').toISOString(),
      }),
    );

    const response = await request(app.getHttpServer()).get(`/${data.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.startAt).toBe(data.startAt);

    console.log(data);
    console.log(response.body);
  });

  afterAll(async () => {
    await app.close();
  });
});
