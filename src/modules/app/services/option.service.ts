import { Injectable } from '@nestjs/common';
import { Option } from '../types/option.type';

@Injectable()
export class OptionService {
  find(carId: string): Option[] {
    if (this.carIdsAudi.indexOf(carId) > -1) {
      return this.optionsAudi;
    }

    return this.options;
  }

  private carIdsAudi = ['1'];
  optionsAudi: Option[] = [
    {
      optionId: 'a1',
      description: 'Pack Technology',
      optionCode: 'DFT458',
      optionType: 'pack',
      price: 2500,
      isSelected: false,
      leasePrice: 65,
    },
    {
      optionId: 'a2',
      description: 'Pack Business',
      optionCode: 'AED487',
      optionType: 'pack',
      price: 2975,
      isSelected: false,
      leasePrice: 42,
    },
    {
      optionId: 'a3',
      description: 'Pack Business Plus',
      optionCode: 'ABD458',
      optionType: 'pack',
      price: 4500,
      isSelected: false,
      leasePrice: 75
    },
    {
      optionId: 'a4',
      description: 'S line',
      optionCode: 'GQS274',
      optionType: 'pack',
      price: 2329.25,
      isSelected: false,
      leasePrice: 87
    },
    {
      optionId: 'a5',
      description: 'Keyless-Entry',
      optionCode: 'MAD249',
      optionType: 'option',
      price: 490.05,
      isSelected: false,
      leasePrice: 8
    },
    {
      optionId: 'a6',
      description: 'Active lane assist',
      optionCode: 'BQC148',
      optionType: 'option',
      price: 713.90,
      isSelected: false,
      leasePrice: 20
    },
    {
      optionId: 'a7',
      description: 'Active side assist',
      optionCode: 'GAP652',
      optionType: 'option',
      price: 635.25,
      isSelected: false,
      leasePrice: 20
    },
    {
      optionId: 'a8',
      description: 'Audi virtual cockpit',
      optionCode: 'MAP369',
      optionType: 'option',
      price: 544.50,
      isSelected: false,
      leasePrice: 35
    },
  ];

  private options: Option[] = [
    {
      optionId: '1',
      description: 'Technology pack',
      optionCode: '123',
      optionType: 'pack',
      price: 1500,
      isSelected: false,
    },
    {
      optionId: '2',
      description: 'Business pack',
      optionCode: '124',
      optionType: 'pack',
      price: 3200,
      isSelected: false,
    },
    {
      optionId: '3',
      description: 'Tow bar',
      optionCode: '452',
      optionType: 'option',
      price: 980,
      isSelected: false,
    },
    {
      optionId: '4',
      description: 'Heated front window',
      optionCode: '554',
      optionType: 'option',
      price: 700,
      isSelected: false,
    },
    {
      optionId: '5',
      description: 'Heated steering wheel',
      optionCode: '783',
      optionType: 'option',
      price: 150,
      isSelected: false,
    },
  ];
}