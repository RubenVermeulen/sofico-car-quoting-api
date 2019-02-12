import { Module } from '@nestjs/common';
import { CarService } from './services/car.service';
import { CarController } from './controllers/car.controller';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { LeasePriceController } from './controllers/lease-price.controller';
import { LeasePriceService } from './services/lease-price.service';

@Module({
  imports: [],
  controllers: [CarController, OptionController, LeasePriceController],
  providers: [CarService, OptionService, LeasePriceService]
})
export class AppModule {
}
