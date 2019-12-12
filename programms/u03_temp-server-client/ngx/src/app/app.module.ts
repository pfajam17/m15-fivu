import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './components/services/data.service';

import { AppComponent } from './app.component';
import { AppClockComponent } from './components/app-clock/app-clock.component';
import { TempMinMaxComponent } from './components/temp-min-max/temp-min-max.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppClockComponent,
    TempMinMaxComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
