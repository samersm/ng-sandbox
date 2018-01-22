import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  users:any[];
  user = {
      name:'',
      email:'',
      phone:''
  }

  constructor(public dataService:DataService) {
    this.dataService.getUsers().subscribe(users => {
        //console.log(users);
        this.users = users;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
      this.dataService.addUser(this.user).subscribe(user => {
          console.log(user);
          this.users.unshift(user);
      });
  }

  onDeleteClick(id){
      this.dataService.deleteUser(id).subscribe(res => {
          for(let i = 0;i < this.users.length;i++){
              if(this.users[i].id == id){
                  this.users.splice(i,1);
              }
          }
      });
  }

}
