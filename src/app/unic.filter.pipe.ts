import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash';

@Pipe({
  name: 'unicFilter',
  pure: false
})

export class UnicFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {

    // lodash uniqBy function
    return _.uniqBy(items, args);
  }
}

