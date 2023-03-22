import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSalesDto } from './dto/create-sales.dto';
import { Sales, SalesDocument } from './schemas/sales.schema';


@Injectable()
export class SalesService {

    constructor(
        @InjectModel(Sales.name) private salesModel: Model<SalesDocument>
        ) {}

    async create(createSalesDto: CreateSalesDto): Promise<Sales> {
        const createdSales = new this.salesModel(createSalesDto);
        return createdSales.save();
    }


    async findSalesByCustomer(customerId: string ){
        return this.salesModel.find({customerId : customerId}).exec();
    }

    async findAll(): Promise<Sales[]> {
        return this.salesModel.find().exec();
    }
}
