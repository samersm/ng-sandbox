import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-i',
  templateUrl: './method-i.component.html',
  styleUrls: ['./method-i.component.css']
})
export class MethodIComponent implements OnInit {
  text:string = 'Hello World';
  value:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
      //this.value = false;
      this.value = !this.value;
  }
}
