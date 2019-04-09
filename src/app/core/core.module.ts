import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    CoreComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
