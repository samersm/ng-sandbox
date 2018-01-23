import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-c',
  templateUrl: './method-c.component.html',
  styleUrls: ['./method-c.component.css']
})
export class MethodCComponent implements OnInit {
  name:string = 'John Doe';
  showName:boolean = true;
  greeting:number = 88;
  
  constructor() { }

  ngOnInit() {
  }

}
