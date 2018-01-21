import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name = 'John Doe';
  age = 35;
  person = {firstName:'Steve', lastName:'Smith'}

  constructor() {
      console.log('Constructor ran...');
      //this.age = 36;
      this.hasBirthday();
      this.hasBirthday();
  }

  ngOnInit() {
  }


  hasBirthday(){
      this.age += 1;
  }

  showAge(){
      return this.age;
  }

}
