import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Todo } from '../providers/todo';
import { TodosComponent } from '../components/todos/todos';
import { TodoHeaderComponent } from '../components/todo-header/todo-header';
import { TodoContentComponent } from '../components/todo-content/todo-content';
import { TodoFooterComponent } from '../components/todo-footer/todo-footer';
import { StatusPipe } from '../pipes/status';
import { AppHeaderComponent } from '../components/app-header/app-header';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TodosComponent,
    TodoHeaderComponent,
    TodoContentComponent,
    TodoFooterComponent,
    AppHeaderComponent,
    StatusPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TodosComponent,
    TodoHeaderComponent,
    TodoContentComponent,
    TodoFooterComponent,
    AppHeaderComponent
  ],
  providers: [Todo, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
