import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: any, currencyCode: string = 'UZS'): string {
    const formattedValue = Number(value).toLocaleString('en-US').replace(/,/g, ' ');
    return `${formattedValue} ${currencyCode}`;
  }
}
