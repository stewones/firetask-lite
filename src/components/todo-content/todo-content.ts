import { Component, Input } from '@angular/core';
import { LoadingController, Events, ToastController } from 'ionic-angular';
import { Todo } from '../../providers/todo';
import { Keyboard } from 'ionic-native';

/*
  Generated class for the TodoContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'todo-content',
    templateUrl: 'todo-content.html'
})
export class TodoContentComponent {
    @Input() todos: any = []; //@Inout() two-way binding
    @Input() filter: string;
    editing: any = [];
    constructor(public todo: Todo, public events: Events, public loading: LoadingController, public toast: ToastController) { }

    /**
     * Remove a Todo
     * 
     * @param {string} id
     * 
     * @memberOf TodoContentComponent
     */
    remove(id: string) {
        this.keyboardClose();
        let loader = this.loading.create({
            content: "Saving...",
            spinner: 'dots',
            duration: 5000
        });
        loader.present().then(() => {
            this.todo.remove(id).then(() => {
                loader.dismiss();
                console.info(`todo ${id} removed`);
            }).catch(() => loader.dismiss());
        });
    }


    /**
     * Save a Todo
     * 
     * @param {*} todo
     * @param {boolean} [notify]
     * 
     * @memberOf TodoContentComponent
     */
    save(todo: any, notify?: boolean) {
        this.editing = []; // reset editing state
        this.keyboardClose();
        this.todo.save(todo)
            .then(() => {
                if (notify) {
                    let toast = this.toast.create({
                        message: 'Todo saved',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            })
            .catch((e) => console.error(e));
    }


    /**
     * Edit a Todo
     * 
     * @param {any} todo
     * @param {number} i
     * 
     * @memberOf TodoContentComponent
     */
    edit(todo, i: number) {
        this.editing[i] = true;
    }



    /**
     * End editing
     * 
     * @param {number} i
     * 
     * @memberOf TodoContentComponent
     */
    doneEditing(i: number) {
        this.events.publish('todo:reload');
        this.editing[i] = false;
        this.keyboardClose();
    }


    /**
     * Handler for key pressed
     * 
     * @param {*} e
     * @param {number} i
     * 
     * @memberOf TodoContentComponent
     */
    eventHandler(e: any, i: number) {
        // esc pressed
        if (e.keyCode === 27) {
            this.editing[i] = false;
        }

        // enter pressed
        if (e.keyCode === 13) {
            this.save(this.todos[i], true);
        }
    }


    /**
     * Mark all as completed
     * 
     * 
     * @memberOf TodoContentComponent
     */
    markAll(checked): void {
        this.todos.forEach((todo) => {
            todo.done = checked;
            this.save(todo);
        });
    }



    /**
     * Close keyboard on devices
     * 
     * 
     * @memberOf TodoContentComponent
     */
    keyboardClose() {
        try {
            Keyboard.close();
        } catch (e) {}
    }
}
