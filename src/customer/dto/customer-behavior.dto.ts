import { ApiProperty } from '@nestjs/swagger';

export class CustomerBehaviorDto {
    @ApiProperty({ example: '12345', description: 'The customer ID' })
    readonly customerId: string;
  
    @ApiProperty({ example: '1234567890', description: 'The customer card number', required: false })
    readonly cardNumber?: string;
  
    @ApiProperty({ example: 'John Doe', description: 'The customer name' })
    readonly name: string;
  
    @ApiProperty({ example: '1', description: 'The store ID' })
    readonly storeId: string;
  
    @ApiProperty({ example: '755', description: 'The program ID' })
    readonly programId: string;
  
    @ApiProperty({ example: '1', description: 'The product category ID', required: false })
    readonly categoryId?: string;
  
    @ApiProperty({ example: '1990-01-01', description: 'The customer birth date', required: false })
    readonly birthDate?: Date;
  
    @ApiProperty({ example: 'Male', description: 'The customer gender', required: false })
    readonly gender?: string;
  
    @ApiProperty({ example: '1', description: 'The city ID', required: false })
    readonly cityId?: string;
  
    @ApiProperty({ example: 'US', description: 'The country ID', required: false })
    readonly countryId?: string;
  
    @ApiProperty({ example: 'CA', description: 'The state ID', required: false })
    readonly stateId?: string;
  
    @ApiProperty({ example: '123-456-7890', description: 'The customer cell phone number', required: false })
    readonly cellPhone?: string;
  
    @ApiProperty({ example: 'johndoe@example.com', description: 'The customer email', required: false })
    readonly email?: string;
  
    @ApiProperty({ example: '2022-01-01', description: 'The customer first sale date', required: false })
    readonly firstSaleDate?: Date;
  
    @ApiProperty({ example: '2022-02-01', description: 'The customer last sale date', required: false })
    readonly lastSaleDate?: Date;
  
    @ApiProperty({ example: '100', description: 'The customer quantity balance', required: false })
    readonly quantityBalance?: string;
  
    @ApiProperty({ example: 5, description: 'The number of products purchased by the customer', required: false })
    readonly quantityProducts?: number;
  
    @ApiProperty({ example: 500.0, description: 'The customer total value of purchases', required: false })
    readonly valueTotal?: number;
  
    @ApiProperty({ example: 100.0, description: 'The customer average value of purchases', required: false })
    readonly valueAverageTicket?: number;
  
    @ApiProperty({ example: 10, description: 'The number of sales made by the customer', required: false })
    readonly quantitySales?: number;
  
    @ApiProperty({ example: 5, description: 'The number of products redeemed by the customer', required: false })
    readonly quantityRedeems?: number;
  
    @ApiProperty({ example: 500, description: 'The number of points redeemed by the customer', required: false })
    readonly quantityPointsRedeem?: number;
  
    @ApiProperty({ example: '2022-03-01', description: 'The customer first date of redeem', required: false })
    readonly firstDateRedeem?: Date;
  
    @ApiProperty({ example: new Date(), description: 'The date of the last redeem' })
    readonly lastDateRedeem?: Date;
  
    @ApiProperty({ example: 'yes', description: 'The promotion campaign permission' })
    readonly lgpdCampaign?: string;
  
    @ApiProperty({ example: 'active', description: 'The LGPD status of the client' })
    readonly lgpdStatusClient?: string;
  
    @ApiProperty({ example: 'yes', description: 'The client data usage permission' })
    readonly lgpdDataUsage?: string;
  
    @ApiProperty({ example: new Date(), description: 'The date of the last update' })
    readonly updatedAt?: Date;
  
    @ApiProperty({ example: new Date(), description: 'The date of the creation' })
    readonly createdAt?: Date;
}
