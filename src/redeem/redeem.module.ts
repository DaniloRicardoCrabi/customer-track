import { Module } from '@nestjs/common';
import { RedeemController } from './redeem.controller';
import { RedeemService } from './redeem.service';
import { RedeemSchema } from './schema/redeem.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'redeem', schema: RedeemSchema,
    }]),
    ConfigModule
  ],
  controllers: [RedeemController],
  providers: [RedeemService]
})
export class RedeemModule {}
