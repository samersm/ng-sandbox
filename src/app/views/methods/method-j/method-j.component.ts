import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-j',
  templateUrl: './method-j.component.html',
  styleUrls: ['./method-j.component.css']
})
export class MethodJComponent implements OnInit {
  text:string = 'Hello';

  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
      console.log(e.type);
  }

  changeText(e){
      this.text = e.target.value;
  }
}
