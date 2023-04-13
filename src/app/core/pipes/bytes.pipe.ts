import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(value: number,): String {
    const Mb = value / 1024;
    if (Mb >= 1024) {
      const Gb = Mb / 1024;
      if (Gb >= 1024) {
        const Tb = Gb / 1024;
        return Tb.toFixed(2) + ' TB';
      }
      return Gb.toFixed(2) + ' GB';
    }
    return value ? Mb.toFixed(2) + ' MB' : '0.00 MB';
  }

}
