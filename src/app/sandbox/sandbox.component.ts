import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  user = {
      name:'',
      email:'',
      phone:''
  }

  constructor() {
  }

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
