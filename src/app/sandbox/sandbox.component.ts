import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  fireEvent(e){
      //console.log('Button Clicked');
      //console.log(greeting);
      console.log(e.type);
  }

}
