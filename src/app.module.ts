import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({useClass: TypeOrmConfigService})
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
