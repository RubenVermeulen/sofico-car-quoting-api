import { Injectable } from '@nestjs/common';

@Injectable()
export class LeasePriceService {
  calculate(carId: string, optionIds: string[]): number {
    return (Math.random() * 500) + 500;
  }
}