import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerBehaviorDto } from '../dto/customer-behavior.dto';
import { CustomerBehavior, CustomerBehaviorDocument } from '../schema/customer-behavior.schema';
import { CustomerService } from '../customer.service';
import { customerBehaviorMock } from '../__tests__/mock/index'

describe('CustomerService', () => {
  let service: CustomerService;
  let model: Model<CustomerBehaviorDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: getModelToken(CustomerBehavior.name),
          useValue: {
            new: jest.fn(),
            constructor: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    model = module.get<Model<CustomerBehaviorDocument>>(getModelToken(CustomerBehavior.name));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
/*
  describe('create', () => {
    it('should create a customer behavior', async () => {
      const customerBehaviorDto: CustomerBehaviorDto = customerBehaviorMock;


      jest.spyOn(model, 'save').mockResolvedValue(customerBehaviorDto);

      const result = await service.create(customerBehaviorDto);

      expect(result).toEqual(createdCustomerBehavior);
      expect(model.save).toHaveBeenCalledWith(customerBehaviorDto);
    });
  });
  */

  describe('findByCustomerIdAndProgramId', () => {
    it('should find customer behaviors by customer and program IDs', async () => {
      const customerId = '123';
      const programId = '456';

      const customerBehaviors = [
        {
          _id: '1',
          customerId: '1010',
          ...customerBehaviorMock
        },
        {
          _id: '2',
          customerId: 1111,
         ...customerBehaviorMock
        },
      ];

      jest.spyOn(model, 'find').mockReturnValue(customerBehaviors as any);

      const result = await service.findByCustomerIdAndProgramId(customerId, programId);

      expect(result).toEqual(customerBehaviors);
      expect(model.find).toHaveBeenCalledWith({ customerId, programId });
    });
  });

  describe('findAll', () => {
    it('should find all customer behaviors', async () => {
      const customerBehaviors = [
        {
          _id: '1',
          customerId: '1010',
          ...customerBehaviorMock
        },
        {
          _id: '2',
          customerId: '1111',
         ...customerBehaviorMock
        },
      ];

      jest.spyOn(model, 'find').mockReturnValueOnce(customerBehaviors as any);

        expect(await service.findAll()).toEqual(customerBehaviors);

    })});
  });
