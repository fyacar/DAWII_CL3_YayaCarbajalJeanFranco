import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { LocationService } from '../pregunta2/locations/location.service';
import { TodoService } from './todos/todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  /*    userId: Number;
    id: number;
    title:string;
    completed:boolean;*/
    displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
    todos: Todo[] = []

  constructor(private todoService: TodoService){

  }
  ngOnInit(): void {
    this.todoService.getFilteredTodos().subscribe((data) =>{
      console.log(data);
      this.todos =data;
    } );
  }

}
