import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-h',
  templateUrl: './method-h.component.html',
  styleUrls: ['./method-h.component.css']
})
export class MethodHComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  fireEvent(e){
      //console.log('Button Clicked');
      //console.log(greeting);
      console.log(e.type);
  }
}
