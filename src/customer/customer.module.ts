import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerBehaviorSchema } from './schema/customer-behavior.schema';
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [
        MongooseModule.forFeature([{
          name: 'customerBehavior', schema: CustomerBehaviorSchema,
        }]),
    ConfigModule  
    ],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
