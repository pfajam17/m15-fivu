import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClockComponent } from './components/clock/clock.component';
import { TempMinMaxComponent } from './components/temp-min-max/temp-min-max.component';
import { TempTableComponent } from './components/temp-table/temp-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TempMinMaxComponent,
    TempTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
