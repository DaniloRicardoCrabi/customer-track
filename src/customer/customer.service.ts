import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerBehaviorDto } from './dto/customer-behavior.dto';
import { CustomerBehavior, CustomerBehaviorDocument } from './schema/customer-behavior.schema';


@Injectable()
export class CustomerService {

    constructor(
        @InjectModel(CustomerBehavior.name) private customerBehaviorModel: Model<CustomerBehaviorDocument>
        ) {}

    async create(customerBehaviorDto: CustomerBehaviorDto): Promise<CustomerBehavior> {
        const createdCustomerBehavior = new this.customerBehaviorModel(customerBehaviorDto);
        return createdCustomerBehavior.save();
    }

    async findByCustomerIdAndProgramId(customerId: string, programId: string ){
        const query = { customerId, programId };
        return this.customerBehaviorModel.find(query);
    }

    async findAll(): Promise<CustomerBehavior[]> {
        return this.customerBehaviorModel.find();
    }
    
}