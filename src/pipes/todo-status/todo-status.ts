import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash';


/**
 * To filter Todos by the status (active/completed)
 * 
 * Used on template eg.:
 * <li *ngFor="let todo of todos | todoStatus:'completed'">{{todo.text}}</li>
 * 
 * @export
 * @class StatusPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'todoStatus',
  pure: false
})
export class TodoStatusPipe implements PipeTransform {
  transform(value, args) {
    switch (args) {
      case 'active':
        value = _.filter(value, (item) => { return !item.done; });
        break;
      case 'completed':
        value = _.filter(value, (item) => { return item.done; });
        break;
    }
    return value;
  }
}