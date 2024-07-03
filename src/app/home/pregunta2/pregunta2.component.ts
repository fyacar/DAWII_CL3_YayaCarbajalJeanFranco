import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { LocationService } from './locations/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  displayedColumns: string[] = ['id', 'name', 'type', 'dimension',"residents","url","created"];
  locations: Location[] = []

  constructor(private locationService: LocationService){

  }

  ngOnInit(): void {
    this.locationService.getAllLocationsTypePlanet().subscribe((data) =>{
      console.log(data);
      this.locations =data;
    } );
  }

}
