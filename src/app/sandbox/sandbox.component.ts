import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name:string = 'John Doe';
  showName:boolean = true;
  greeting:number = 88;

  constructor() {
  }

  ngOnInit() {
  }

}
