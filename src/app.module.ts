import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { RedeemModule } from './redeem/redeem.module';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import * as Joi from 'joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema : Joi.object({
        MONGODB_URI: Joi.string().required(),
      })
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    SalesModule, RedeemModule, CustomerModule]
})
export class AppModule {}
