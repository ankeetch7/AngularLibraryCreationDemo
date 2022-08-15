import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { countLength } from "my-lib";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CustomLibraryPractice';
  demoForm: any;
  count: number;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.demoForm = this.formBuilder.group({
      str: ['']
    });
  }
  onSubmit(){
    let str = this.demoForm.value.str;
    this.count = countLength(str);
  }
}
