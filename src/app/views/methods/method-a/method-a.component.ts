import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-a',
  templateUrl: './method-a.component.html',
  styleUrls: ['./method-a.component.css']
})
export class MethodAComponent implements OnInit {
  name = 'John Doe';
  age = 35;
  person = {firstName:'Steve', lastName:'Smith'}

  // Variables List
  // name:string = 'John Doe';
  // age:number = 35;
  hasChildren:boolean = true;
  city:any = 'Boston';
  myNumbersArray:number[] = [1,2,3];
  myStringsArray:string[] = ['hello', 'world'];
  myAnyArray:any[] = [1,2,'hello'];
  myTuple: [string, number] = ['hello', 3];
  unusable: void = undefined;
  u: undefined = undefined;
  n: null = null;

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
