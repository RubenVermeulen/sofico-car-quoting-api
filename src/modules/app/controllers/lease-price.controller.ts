import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { LeasePriceService } from '../services/lease-price.service';

@Controller('lease-price')
export class LeasePriceController {

  constructor(private leasePriceService: LeasePriceService) {
  }

  @Get('')
  find(@Query('car_id') carId, @Query('option_id') optionIds): number {
    return this.leasePriceService.calculate(carId, optionIds);
  }
}