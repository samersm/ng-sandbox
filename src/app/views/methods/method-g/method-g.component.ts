import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-g',
  templateUrl: './method-g.component.html',
  styleUrls: ['./method-g.component.css']
})
export class MethodGComponent implements OnInit {
  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 0.5;
  
  constructor() { }

  ngOnInit() {
  }

}
