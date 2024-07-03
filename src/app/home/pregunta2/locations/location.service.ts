import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private httpClient:HttpClient) { 
  }

 getAllLocationsTypePlanet():Observable<Location[]>{
  return this.httpClient.get<{info: any, results:Location[]}>("https://rickandmortyapi.com/api/location?type=planet")
  .pipe(map(response =>response.results));
}



}
