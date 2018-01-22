import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // value:boolean = false;
  constructor(public dataService:DataService) {
      // this.dataService.changeValue()
   }
  // changeValue(){
  //     //this.value = false;
  //     this.value = !this.value;
  // }
}
