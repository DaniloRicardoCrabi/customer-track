import { ApiProperty } from '@nestjs/swagger';

export class CreateSalesDto {
  @ApiProperty({ example: '123456', description: 'The ID of the sale' })
  readonly saleId: string;

  @ApiProperty({ example: '789', description: 'The ID of the customer' })
  readonly customerId: string;

  @ApiProperty({ example: '456', description: 'The ID of the program' })
  readonly programId: string;

  @ApiProperty({ example: 'ABC Store', description: 'The name of the store' })
  readonly storeId: string;

  @ApiProperty({ example: '7890', description: 'The ID of the product' })
  readonly productId: string;

  @ApiProperty({ example: '123', description: 'The ID of the product category' })
  readonly productCategoryId: string;

  @ApiProperty({ example: 2, description: 'The quantity of products sold' })
  readonly quantityProducts: number;

  @ApiProperty({ example: '2022-03-22T15:00:00.000Z', description: 'The date of the sale' })
  readonly saleDate: Date;
}