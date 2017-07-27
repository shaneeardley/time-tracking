import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CreateEventComponent } from './components';
import { ViewEventsComponent } from './components';
import { LogonComponent } from './components';

const firebaseConfig = {
  apiKey: "AIzaSyBRlYpKEvBKk-D6ao-OwCcFqaIEzjRSv7I",
  authDomain: "time-tracking-46497.firebaseapp.com",
  databaseURL: "https://time-tracking-46497.firebaseio.com",
  projectId: "time-tracking-46497",
  storageBucket: "",
  messagingSenderId: "49859434832"
};




@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    ViewEventsComponent,
    LogonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
