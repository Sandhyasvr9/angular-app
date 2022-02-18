import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todoObj } from '../todo';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoObj:todoObj;
  errMsg:string = '';

  constructor(private route:ActivatedRoute,private router:Router){
    this.todoObj = new todoObj();
    this.route.params.subscribe((result) => {
      this.todoObj.id = result['id'];
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('todoList');
    if (oldRecords !== null){
      const todoList = JSON.parse(oldRecords);
      const currentTodo = todoList.find((m:any) => m.id === this.todoObj.id);
      const index = todoList.findIndex((a:any) => a.id == this.todoObj.id);
      if (currentTodo !== undefined){
        this.todoObj.name = currentTodo.name;
        this.todoObj.description = currentTodo.description;
        this.todoObj.time = currentTodo.time;
      }else{
        this.todoObj.name = todoList[index].name;
        this.todoObj.description = todoList[index].description;
        this.todoObj.time = todoList[index].time
      }
    }
  }

  onUpdateTodo(){
    const oldrecords = localStorage.getItem('todoList');
    // console.log(this.todoObj.name);
    if (this.todoObj.name !== '' && this.todoObj.description !== '' && this.todoObj.time !== ''){
      if (oldrecords !== null){
        const todoList = JSON.parse(oldrecords);
        todoList.splice(todoList.findIndex((a:any) => a.id == this.todoObj.id),1,this.todoObj);
        localStorage.setItem('todoList',JSON.stringify(todoList));
      }
      this.router.navigateByUrl('/todolist')
      this.errMsg = "";
    }else{
      this.errMsg ="Please enter all fields"
    }
  }

  }
