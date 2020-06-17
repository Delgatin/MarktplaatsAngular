import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'prijs'
})
export class PrijsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currencyPipe = new CurrencyPipe('nl');
    const rawOutput = currencyPipe.transform(value , 'EUR');
    return rawOutput.replace(',00', ',-');
  }

}
