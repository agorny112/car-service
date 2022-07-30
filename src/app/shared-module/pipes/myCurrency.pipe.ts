import { Pipe, PipeTransform } from '@angular/core';
import {formatCurrency, getCurrencySymbol} from "@angular/common";

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(
    value: number | any,
    currencyCode: string = 'PLN',
    display:
      |'code'
      |'symbol'
      |'symbol-narrow'
      | string
      | boolean = 'symbol-narrow',
    digitsInfo: string = '',
    locale: string = 'pl'
    ): string | null {
      return formatCurrency(
        value,
        locale,
        getCurrencySymbol(currencyCode, 'wide'),
        currencyCode,
        digitsInfo
    );
  }

}
