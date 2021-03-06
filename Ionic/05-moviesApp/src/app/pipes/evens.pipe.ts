import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evens'
})
export class EvensPipe implements PipeTransform {

  transform(arr: any[]): any[] {

    const evens = arr.reduce((result, value, index, array) => {

      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    console.log(evens);
    return evens;
 }

}
