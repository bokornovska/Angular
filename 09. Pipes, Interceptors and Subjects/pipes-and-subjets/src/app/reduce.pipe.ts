import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false => not pure functions will re-render
  // pure: true => pure function will be memoized
})

export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], reduceFn: (acc: any, crr: T) => any, initialValue: T): unknown {
    // const sum = (acc, crr) => acc+crr;
    // [1, 2, 3, 4].reduce(sum, 0)
    return array.reduce(reduceFn, initialValue);
  }

}
