import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header';
import { TodoContentComponent } from './todo-content/todo-content';
import { TodoFooterComponent } from './todo-footer/todo-footer';
import { TodoHeaderComponent } from './todo-header/todo-header';
import { TodoListComponent } from './todo-list/todo-list';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [AppHeaderComponent,
    TodoContentComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoListComponent],
	imports: [IonicModule, PipesModule, HttpModule],
	exports: [AppHeaderComponent,
    TodoContentComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoListComponent]
})
export class ComponentsModule {}
