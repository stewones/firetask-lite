import { Component, Input, NgZone } from '@angular/core';
import { TodoProvider } from '../../providers/todo/todo';
import { Events } from 'ionic-angular';
import { APP_VERSION } from '../../configs/version';

/*
  Generated class for the Todos component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListComponent {
  version: string = APP_VERSION;
  todos: any = []; // array of todos
  @Input() filter: string;
  busy: boolean = false;

  constructor(public todo: TodoProvider, public events: Events, public zone: NgZone) {
    this.busy = true;

    // get all todos
    this.todo.ref().then((path) => {
      this.todo.db().ref(path).on('value', (snapshot) => {
        let todos: any = [], _todos: any = snapshot.val();
        for (var k in _todos) {
          todos.push({
            id: k,
            text: _todos[k].text,
            done: _todos[k].done || false
          });
        }
        this.zone.run(() => { // workaround to get it updated instantly on the view
          this.todos = todos; // set to view
          this.busy = false;
        });
      }, (e) => { this.busy = false; console.error(e); });
    });
  }
}