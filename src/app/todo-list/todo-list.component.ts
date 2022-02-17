import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todoObj } from '../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {



  todoList:todoObj [];

  constructor(){
    this.todoList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('todoList');
    if (records !== null){
      this.todoList = JSON.parse(records);

    }
  }



  onDeleteTodo(id){
    const oldRecords = localStorage.getItem('todoList');
    if (oldRecords !== null){
      const todoList = JSON.parse(oldRecords);
      todoList.splice(todoList.findIndex((a:any) => a.id === id),1);
      localStorage.setItem('todoList',JSON.stringify(todoList));
    }
    const records = localStorage.getItem('todoList');
    if (records !== null){
      this.todoList = JSON.parse(records);

    }

  }



}
