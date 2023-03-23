import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateSalesDto } from './dto/create-sales.dto';
import { Sales } from './schemas/sales.schema';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post()
    async create(@Body() createSalesDto: CreateSalesDto): Promise<Sales> {
      return this.salesService.create(createSalesDto);
    }
  
    @Get()
    async findAll(): Promise<Sales[]> {
      return this.salesService.findAll();
    }
  
    @Get(':customerId')
    async findByCustomer(@Param('customerId') customerId: string): Promise<Sales[]> {
      return this.salesService.findSalesByCustomer(customerId);
    }

}
