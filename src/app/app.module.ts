
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //import the forms module from @angular/forms

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //add forms module to our imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


