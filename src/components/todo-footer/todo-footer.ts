import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoProvider } from '../../providers/todo/todo';
import lodash from 'lodash';
let _ = lodash;
/*
  Generated class for the TodoFooter component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'todo-footer',
  templateUrl: 'todo-footer.html'
})
export class TodoFooterComponent {
  @Input() todos: any = []; 
  @Input() filter: string;
  @Output() filterChange = new EventEmitter(); //@Output() emit change detection to up components

  constructor(public todo: TodoProvider) { }

  /**
   * Clear completed Todos
   * 
   * 
   * @memberOf TodoFooterComponent
   */
  clearCompleted() {
    let completed = _.filter(this.todos, (item) => { return item.done; });
    completed.forEach((item) => {
      this.todo.remove(item.id);
    });
  }


  /**
   * Qty of completed Todos
   * 
   * @returns
   * 
   * @memberOf TodoFooterComponent
   */
  completed() {
    return _.filter(this.todos, (item) => { return item.done; }).length || 0;
  }


  /**
   * Qty of left Todos to complete
   * 
   * @returns
   * 
   * @memberOf TodoFooterComponent
   */
  left() {
    return _.filter(this.todos, (item) => { return !item.done; }).length || 0;
  }

  /**
   * Filter Todo by status
   * 
   * @param {any} type
   * 
   * @memberOf TodoFooterComponent
   */
  status(type) {
    this.filter = type;
    this.filterChange.emit(type);
  }
}
