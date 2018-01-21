import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
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
