import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs';
import '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private getCarsUrl = "http://localhost:3000/api/cars";

  constructor(private http: HttpClient) {
  }

  getCars() {
    return this.http.get<any>(this.getCarsUrl);
  }

  getCar(id: number) {
    return this.http.get<any>(this.getCarsUrl + `/${id}`);
  }
}
