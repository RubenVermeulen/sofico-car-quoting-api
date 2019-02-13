import { Injectable } from '@nestjs/common';
import { OptionService } from './option.service';
import { CarService } from './car.service';

@Injectable()
export class LeasePriceService {
  constructor(private carService: CarService,
              private optionService: OptionService) {
  }

  calculate(carId: string, optionIds: string[]): number {
    const car = this.carService.findOne(carId);

    if (!car) {
      return (Math.random() * 500) + 500;
    }

    if (!optionIds || optionIds.length === 0) {
      return car.leasePrice;
    }

    let leasePrice = car.leasePrice;


    if (carId === '1') {
      leasePrice = this.optionService.optionsAudi.reduce((acc, curr) => {
        if (optionIds.indexOf(curr.optionId) > -1) {
          return acc + curr.leasePrice;
        }
        else {
          return acc;
        }
      }, leasePrice);
    }

    return leasePrice;
  }
}