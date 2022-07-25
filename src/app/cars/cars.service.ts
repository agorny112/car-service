import {Injectable, Optional} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Car} from "./models/car";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private getCarsUrl = "http://localhost:3000/api/cars";

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.getCarsUrl,this.httpOptions).pipe(
      map(response => response)
    );
  }
}
