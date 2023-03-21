import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { RedeemModule } from './redeem/redeem.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [SalesModule, RedeemModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
