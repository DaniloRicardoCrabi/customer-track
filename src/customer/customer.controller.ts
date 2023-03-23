import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerBehavior } from './schema/customer-behavior.schema';
import { CustomerBehaviorDto } from './dto/customer-behavior.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerBehaviorService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerBehaviorDto: CustomerBehaviorDto): Promise<CustomerBehavior> {
    return this.customerBehaviorService.create(createCustomerBehaviorDto);
  }

  @Get(':customerId/:programId')
  async findByCustomerIdAndProgramId(@Param('customerId') customerId: string, @Param('programId') programId: string): Promise<CustomerBehavior[]> {
    return this.customerBehaviorService.findByCustomerIdAndProgramId(customerId, programId);
  }

  @Get()
  async findAll(): Promise<CustomerBehavior[]> {
    return this.customerBehaviorService.findAll();
  }
}
