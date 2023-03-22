import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedeemService {

    constructor(private readonly configService: ConfigService) {}
}
