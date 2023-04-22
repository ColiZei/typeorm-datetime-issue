import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestTable } from './test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TestTable) private repo: Repository<TestTable>,
  ) {}

  get(id: number) {
    return this.repo.findOne({
      where: { id },
    });
  }
}
