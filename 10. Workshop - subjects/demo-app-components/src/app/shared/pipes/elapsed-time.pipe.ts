import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    // date from the post from today's date
    // date string = 20.07.23 - new Date()
    return moment(dateString).fromNow();
  }

}
