import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RedeemDocument = HydratedDocument<Redeem>;

@Schema()
export class Redeem {
  @Prop({ type: String, required: true })
  customerId: string;

  @Prop({ type: String, required: true })
  programId: string;

  @Prop({ type: String, required: true })
  storeId: string;

  @Prop({ type: String, required: true })
  rewardId: string;

  @Prop({ type: String, required: true })
  rewardCategoryId: string;

  @Prop({ type: String })
  rewardType: string;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ type: Date })
  createdAt: Date;

}

export const RedeemSchema = SchemaFactory.createForClass(Redeem);