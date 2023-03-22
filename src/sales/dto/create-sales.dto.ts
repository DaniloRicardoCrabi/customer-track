export class CreateSalesDto {
    readonly saleId: string;
    readonly customerId: string;
    readonly programId: string;
    readonly storeId: string;
    readonly productId: string;
    readonly productCategoryId: string;
    readonly quantityProducts: number;
    readonly saleDate: Date;
  }