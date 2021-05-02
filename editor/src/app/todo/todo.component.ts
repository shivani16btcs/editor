import { Component, OnInit } from '@angular/core';
import {TodoService} from './shared/todo.service';// TodoService is a Injected Service
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  editor: Editor;
  public html;

  constructor(private toDoService:TodoService) { }
  ngOnInit(){
    this.editor = new Editor();
    this.html=localStorage.getItem('content');
  }  

  saveTemplate(){
    this.toDoService.addTitle(this.html);
  }


  ngOnDestroy(): void {
    this.editor.destroy();
  }

 
}
