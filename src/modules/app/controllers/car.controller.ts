import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { CarService } from '../services/car.service';
import { Car } from '../types/car.type';

@Controller('cars')
export class CarController {

  constructor(private carService: CarService) {
  }

  @Get()
  find(): Car[] {
    return this.carService.find();
  }

  @Get(':carId')
  findOne(@Param('carId') carId): Car {
    return this.carService.findOne(carId);
  }
}