import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxTextExpanderModule } from 'ngx-text-expander';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgxTextExpanderModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
