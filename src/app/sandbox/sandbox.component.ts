import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
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
