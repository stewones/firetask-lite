import { Component } from '@angular/core';
import { TodoProvider } from '../../providers/todo/todo';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the TodoHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'todo-header',
  templateUrl: 'todo-header.html'
})
export class TodoHeaderComponent {
  todoText: string;

  constructor(public todo: TodoProvider, public toastCtrl: ToastController) { }


  /**
   * Add Todo
   * 
   * 
   * @memberOf TodoHeaderComponent
   */
  addTodo() {
    this.todo.add(this.todoText).then(() => {
      console.info(`todo ${this.todoText} added`);
      this.todoText = null;
    }).catch((e) => {
      console.error(e);
      let toast = this.toastCtrl.create({
        message: e,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
