import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name:string = 'John Doe';
  age:number = 35;
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
  }

  ngOnInit() {
  }

}
