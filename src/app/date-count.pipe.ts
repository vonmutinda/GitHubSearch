import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const secondsDay = 60*60*24 ;

    let today = new Date();
    let dateCreated = value;

     
    return days;
  }

}
