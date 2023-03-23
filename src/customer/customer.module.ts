import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerBehaviorSchema, CustomerBehavior } from './schema/customer-behavior.schema';
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [
        MongooseModule.forFeature([{
          name: CustomerBehavior.name , schema: CustomerBehaviorSchema,
        }]),
    ConfigModule  
    ],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
