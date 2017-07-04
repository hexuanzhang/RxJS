import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactCardComponent } from './contact-card.component';
import { NG_COMPONENT } from './directive/index';
import { RXJS_COMPONENT } from './rxjs/index';
import { COMPONENT } from './component/index';

@NgModule({
  declarations: [
      AppComponent,
      ContactCardComponent,
      ...NG_COMPONENT,
      ...RXJS_COMPONENT,
      ...COMPONENT
  ],
  imports: [
      BrowserAnimationsModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
