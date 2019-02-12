import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { Option } from '../types/option.type';

@Controller('options')
export class OptionController {

  constructor(private optionService: OptionService) {
  }

  @Get(':carId')
  find(@Param('carId') carId): Option[] {
    return this.optionService.find(carId);
  }
}