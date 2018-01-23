import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-m',
  templateUrl: './method-m.component.html',
  styleUrls: ['./method-m.component.css']
})
export class MethodMComponent implements OnInit {
  user = {
      name:'',
      email:'',
      phone:''
  }
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
   if(valid){
       console.log(value);
   } else {
       console.log('Form is invalid');
   }
  }
}
