import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-f',
  templateUrl: './method-f.component.html',
  styleUrls: ['./method-f.component.css']
})
export class MethodFComponent implements OnInit {
  isSpecial = true;
  canSave = true;
  currentStyles = {};
  
  constructor() {
     this.setCurrentStyles();
   }

  ngOnInit() {
  }

  setCurrentStyles(){
      this.currentStyles = {
          'font-style': this.canSave ? 'italic' : 'normal',
          'font-size': this.isSpecial ? '24px' : '12px'
      }
  }
}
