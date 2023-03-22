import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomerService {

    constructor(private readonly configService: ConfigService) {}
}
