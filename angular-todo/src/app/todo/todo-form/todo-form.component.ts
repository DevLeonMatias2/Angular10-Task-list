import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TodoService} from "../services/todo.service";
import {Todo} from "../models/todo";
import firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;
import {TodoViewModel} from "../models/todo-view-model";
import {create} from "domain";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {


  todoForm: FormGroup | undefined;
  private createMode: any;
  private todo: any;
  constructor( private formBuilder:FormBuilder,
               public activeModal:NgbActiveModal,
               private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title:['',Validators.required],
      description: ['',Validators.required],
      done:false
    });
  }

  saveTodo() {
    if (this.todoForm.invalid) {
      return;
    }

    if (this.createMode){
      let todo: Todo = this.todoForm.value;
      todo.lastModifiedDate = new Date();
      todo.createdDate = new Date();
      this.todoService.saveTodo(todo)
        .then(response => this.handleSuccessfulSaveTodo(response, todo))
        .catch(err => console.error(err));
    } else{
      let todo: TodoViewModel = this.todoForm.value;
      todo.id = this.todo.id;
      todo.lastModifiedDate = new Date();
      this.todoService.editTodo(todo)
        .then(() => this.handleSuccessfulEditTodo(todo))
        .catch(err => console.error(err));
    }

  }

  handleSuccesfulSaveTodo(response:DocumentReference, todo: Todo){
    this.activeModal.dismiss({ todo:todo,id:response.id,createMode:true});
  }

  private handleSuccessfulEditTodo(todo: TodoViewModel) {
    this.activeModal.dismiss({todo:todo,id:todo.id,createMode:false});
  }

  private handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo) {
    return undefined;
  }
}
