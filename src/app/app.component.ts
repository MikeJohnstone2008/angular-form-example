import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  sampleForm: NgForm;
  @ViewChild('sampleForm') currentForm: NgForm;
  
  model: object = {
    first_name: "Bob",
    last_name: "Smith"
  }
    //app.component.ts
  onSubmit(data: NgForm){
    console.log(data.value)
  }


}
