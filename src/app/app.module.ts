// angular/ionic stuff
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

// providers
import { TodoProvider } from '../providers/todo/todo';

// plugins
//import { Firebase } from '@ionic-native/firebase';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// pages
import { TabsPage } from '../pages/tabs/tabs';
import { HomePageModule } from '../pages/home/home.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ContactPageModule } from '../pages/contact/contact.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    AboutPageModule,
    ContactPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    // angular/ionic stuff
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // providers
    TodoProvider,
    // plugins
    StatusBar,
    SplashScreen,
    //Firebase,
    Keyboard,
    InAppBrowser
  ]
})
export class AppModule { }
