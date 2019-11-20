import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuchListeComponent } from './buchliste.component';

@NgModule({
  declarations: [
    AppComponent, BuchListeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
