import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string) {
    value = '+91' + value;
    const countryCodeStr = value.slice(0, 3);
    const areaCodeStr = value.slice(3, 6);
    const midSectionStr = value.slice(6, 9);
    const lastSectionStr = value.slice(9);

    return `${countryCodeStr} - ${areaCodeStr}-${midSectionStr}-${lastSectionStr}`;
  }

}
