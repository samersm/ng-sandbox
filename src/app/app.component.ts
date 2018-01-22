import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value:boolean = false;

  changeValue(){
      //this.value = false;
      this.value = !this.value;
  }
}
