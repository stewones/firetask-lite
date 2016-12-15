import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';


/** 
 *  Import Firebase
 */
import { firebaseConfig } from '../config/firebase'; // importing firebase config
import * as Firebase from 'firebase'; // importing firebase class
let firebase: any = Firebase;


/*
  Generated class for the Todo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Todo {
    public fb: any; // firebase
    public useIP: boolean = true; // in the path db
    public ip: string;


    constructor(public http: Http, public events: Events) {
        // setting up firebase
        firebase = firebase.default;
        firebase.initializeApp(firebaseConfig);
        this.fb = firebase;
        this.resolveIP();
    }


    /**
     * Instance of database
     * 
     * @returns
     * 
     * @memberOf Todo
     */
    db() {
        return this.fb.database();
    }


    /**
     * Get All Todos
     * 
     * @param {*} [resolve]
     * @param {*} [reject]
     * @returns
     * 
     * @memberOf Todo
     */
    all(resolve?: any, reject?: any) {
        return this.ref().then((path) => {
            return this.db().ref(path).on('value', (snapshot) => {
                // 
                let todos: any = [], _todos: any = snapshot.val();
                for (var k in _todos) {
                    todos.push({
                        id: k,
                        text: _todos[k].text,
                        done: _todos[k].done || false
                    });
                }
                resolve(todos);
            }, reject);
        }, reject);
    }

    /**
     * Add a new Todo
     * 
     * @param {string} text
     * @returns Promise
     * 
     * @memberOf Todo
     */
    add(text: string) {
        return new Promise((resolve, reject) => {
            if (text) {
                this.ref().then((path) => {
                    this.db().ref(path).push({
                        text: text,
                        done: false
                    }).then(() => {
                        this.events.publish('todo:added', text);
                        resolve(text);
                    }).catch(reject);
                });
                this.countStats();
            } else {
                reject('Missing todo text');
            }
        });
    }


    /**
     * Save the todo
     * 
     * @param {any} todo
     * @returns Promise
     * 
     * @memberOf Todo
     */
    save(todo: any) {
        return new Promise((resolve, reject) => {
            if (todo)
                this.ref().then((path) => {
                    this.db().ref(path + '/' + todo.id).set(todo).then(() => { // and save
                        resolve(todo);
                    }).catch(reject);
                });
            else
                reject('Missing todo object');
        });
    }


    /**
     * Remove a Todo
     * 
     * @param {string} id
     * @returns Promise
     * 
     * @memberOf Todo
     */
    remove(id: string) {
        return new Promise((resolve, reject) => {
            this.ref().then((path) => {
                this.events.publish('todo:removed');
                this.db().ref(path + '/' + id).remove().then(resolve).catch(reject);
            }, reject);
        });
    }

    /**
     * Path used as base reference for db
     * 
     * @returns Promise
     * 
     * @memberOf Todo
     */
    ref() {
        return new Promise((resolve, reject) => {
            if (this.useIP) {
                if (this.ip) {
                    resolve('todos/' + this.ip.split('.').join('-'));
                } else {
                    this.resolveIP().then((ip) => {
                        resolve('todos/' + this.ip.split('.').join('-'));
                    });
                }
            } else {
                resolve('todos');
            }
        });
    }

    /**
     * Resolve IP
     * 
     * As we dont use user authentication
     * we need something to use as unique identifier in db
     * So lets use the user ip address to this
     * 
     * @returns Promise
     * 
     * @memberOf Todo
     */
    resolveIP() {
        return new Promise((resolve, reject) => {
            this.http.get('https://api.ipify.org?format=json')
                .subscribe((res: Response) => {
                    let ip = res.json().ip;
                    this.ip = ip;
                    resolve(ip);
                });
        });
    }


    /**
     * Update total of todos
     * 
     * 
     * @memberOf Todo
     */
    countStats(): void {
        var stats = this.fb.database().ref('stats/todos');
        stats.transaction(function (current) {
            return current + 1;
        });
    }
}
