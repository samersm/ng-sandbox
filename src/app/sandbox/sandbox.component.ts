import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  text:string = 'Hello World';
  value:boolean = true;
  
  constructor() {
  }

  ngOnInit() {
  }

  changeValue(){
      //this.value = false;
      this.value = !this.value;
  }

}
