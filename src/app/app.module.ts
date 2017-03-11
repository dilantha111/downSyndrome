import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { MyApp } from './app.component';
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";
import {AddPage} from "../pages/add/add";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
