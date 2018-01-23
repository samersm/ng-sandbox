import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-d',
  templateUrl: './method-d.component.html',
  styleUrls: ['./method-d.component.css']
})
export class MethodDComponent implements OnInit {
  imageUrl:string = 'http://lorempixel.com/400/200/';
  isUnchanged:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
