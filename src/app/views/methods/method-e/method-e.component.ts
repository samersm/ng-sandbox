import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-e',
  templateUrl: './method-e.component.html',
  styleUrls: ['./method-e.component.css']
})
export class MethodEComponent implements OnInit {
  isSpecial = true;
  canSave = false;
  currentClasses = {};

  constructor() {
     this.setCurrentClasses();
   }

  ngOnInit() {
  }

  setCurrentClasses(){
      this.currentClasses = {
          saveable:this.canSave,
          special: this.isSpecial
      }
  }

}
