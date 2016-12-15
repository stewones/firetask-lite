import { Component } from '@angular/core';

/*
  Generated class for the AppHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello AppHeader Component');
    this.text = 'Hello World';
  }

}
