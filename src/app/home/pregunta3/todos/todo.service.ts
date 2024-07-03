import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private httpClient: HttpClient) {     
    
  }
  getFilteredTodos():Observable<Todo[]>{
    
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").pipe(
      map(todos => todos.filter(todo => todo.id >= 25 && todo.id <=90 && todo.completed ))
    )
  }
}
