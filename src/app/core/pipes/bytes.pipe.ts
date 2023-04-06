import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(value: number,): String {
    const byte = value / 1024
    return byte.toFixed(2) + ' MB';
  }

}
