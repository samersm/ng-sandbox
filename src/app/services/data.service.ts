import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  baseUrl = "http://jsonplaceholder.typicode.com/users/"
  value:boolean = false;

  constructor(public http:Http) { }


      getUsers(){
          return this.http.get(this.baseUrl)
              .map(res => res.json());
      }

      addUser(user){
          return this.http.post(this.baseUrl, user)
              .map(res => res.json());
      }

      deleteUser(id){
          return this.http.delete(this.baseUrl + id)
              .map(res => res.json());
      }

      updateUser(user){
          return this.http.put(this.baseUrl + user.id, user)
              .map(res => res.json());
      }

      changeValue(){
          //this.value = false;
          this.value = !this.value;
      }
}
