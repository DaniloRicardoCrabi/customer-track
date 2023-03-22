import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sales, SalesDocument } from './schemas/sales.schema';


@Injectable()
export class SalesService {

    constructor(
        @InjectModel(Sales.name) private salesModel: Model<SalesDocument>
        private readonly configService: ConfigService
    ) { }

    async create()
}
