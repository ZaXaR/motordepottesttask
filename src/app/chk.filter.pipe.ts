import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'checkcity'
})

export class ChkFilterPipe implements PipeTransform {
  transform(items: any, checked: any): any {
    return items
  }
}
