import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  text:string = 'Hello';

  constructor() {
  }

  ngOnInit() {
  }

  fireEvent(e){
      console.log(e.type);
  }

  changeText(e){
      this.text = e.target.value;
  }

}
