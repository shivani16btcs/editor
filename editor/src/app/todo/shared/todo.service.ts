import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(  ){
  }
  

  addTitle(title){
    localStorage.setItem('content', title);
  }

}
