import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sales, SalesSchema } from './schemas/sales.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Sales.name, schema: SalesSchema,
    }])
  ],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
