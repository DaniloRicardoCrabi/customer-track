import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerBehaviorDocument = HydratedDocument<CustomerBehavior>;

@Schema()
export class CustomerBehavior {
  
  @Prop({ type: String, required: true })
  customerId: string;

  @Prop({ type: String })
  cardNumber: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  storeId: string;

  @Prop({ type: String, required: true })
  programId: string;

  @Prop({ type: String })
  categoryId: string;

  @Prop({ type: Date })
  birthDate: Date;

  @Prop({ type: String })
  gender: string;

  @Prop({ type: String })
  cityId: string;
 
  @Prop({ type: String })
  countryId: string;

  @Prop({ type: String })
  stateId: string;

  @Prop({ type: String })
  cellPhone: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Date, default: null })
  firstSaleDate: Date;

  @Prop({ type: Date, default: null })
  lastSaleDate: Date;

  @Prop({ type: Number })
  quantityBalance: string;

  @Prop({ type: Number, default: 0 })
  quantityProducts: number;

  @Prop({ type: Number, default: 0 })
  valueTotal: number;

  @Prop({ type: Number, default: 0 })
  valueAverageTicket: number;

  @Prop({ type: Number, default: 0 })
  quantitySales: number;

  @Prop({ type: Number, default: 0 })
  quantityRedeems: number;

  @Prop({ type: Number, default: 0 })
  quantityPointsRedeem: number; 

  @Prop({ type: Date, default: null })
  firstDateRedeem: Date; 

  @Prop({ type: Date, default: null })
  lastDateRedeem: Date; 

  @Prop({ type: String })
  lgpdCampaign: string;

  @Prop({ type: String })
  lgpdStatusClient: string;

  @Prop({ type: String })
  lgpdDataUsage: string;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ type: Date })
  createdAt: Date;
}

export const CustomerBehaviorSchema = SchemaFactory.createForClass(CustomerBehavior);