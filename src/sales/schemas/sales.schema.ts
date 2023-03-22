import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SalesDocument = HydratedDocument<Sales>;

@Schema()
export class Sales {

    @Prop({ type: String, required: true })
    saleId: string;

    @Prop({ type: String, required: true })
    customerId: string;
  
    @Prop({ type: String, required: true })
    programId: string;
  
    @Prop({ type: String, required: true })
    storeId: string;

    @Prop({ type: String, required: true })
    productId: string;
  
    @Prop({ type: String })
    productCategoryId: string;
  
    @Prop({ type: Number, required: true })
    quantityProducts: number;

    @Prop({ type: Date })
    saleDate: Date;
}

export const SalesSchema = SchemaFactory.createForClass(Sales);