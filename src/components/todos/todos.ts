import { Component, Input } from '@angular/core';
import { Todo } from '../../providers/todo';
import { Events } from 'ionic-angular';

/*
  Generated class for the Todos component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'todos',
  templateUrl: 'todos.html'
})
export class TodosComponent {
  todos: any = []; // array of todos
  @Input() filter: string;
  busy: boolean = false;

  constructor(public todo: Todo, public events: Events) {

    // get list of todos on load
    this.loadTodos();

    // update the list on events
    this.events.subscribe('todo:added', () => {
      this.loadTodos();
    });
    this.events.subscribe('todo:removed', () => {
      this.loadTodos();
    });
    this.events.subscribe('todo:reload', () => {
      this.loadTodos();
    });

  }


  /**
   * Load Todos
   * 
   * 
   * @memberOf TodosComponent
   */
  loadTodos() {
    this.busy = true;
    // get all todos by the service
    this.todo.all().then((todos) => {
      this.busy = false;
      this.todos = todos; // set to view
    });
  }

}
