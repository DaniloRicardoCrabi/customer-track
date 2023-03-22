import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesSchema } from './schemas/sales.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'sales', schema: SalesSchema,
    }]),
  ConfigModule  
  ],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
