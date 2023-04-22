import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTable } from './test.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testdb',
      entities: [TestTable],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TestTable]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
