import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-k',
  templateUrl: './method-k.component.html',
  styleUrls: ['./method-k.component.css']
})
export class MethodKComponent implements OnInit {
  name:string = '';
  age:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
