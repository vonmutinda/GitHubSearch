import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any): number {

    const secondsDay = 60*60*24 ; // returns seconds there in a day

    let today:Date = new Date();
    // let dateCreated = value;

    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth());

    var dateDifference =Math.abs(value-todayWithoutTime )// returns value in milliseconds

    var dateDifferenceSeconds = dateDifference*0.001; //converts to seconds

    var days = dateDifferenceSeconds/secondsDay; //converts into days


    if (days >= 1){
      return days;
    }else{
      return 0;
    }
    // return days
  }

}
