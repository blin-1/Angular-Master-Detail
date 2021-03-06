import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
