import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs';
import '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private getCarsUrl = "http://localhost:3000/api/cars";

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<any> {
    return this.http.get<any>(this.getCarsUrl);
  }

  getCar(id: number) : Observable<any> {
    return this.http.get<any>(this.getCarsUrl + `/${id}`);
  }

  updateCar(id: number, data : any) : Observable<any> {
    return this.http.put<any>(this.getCarsUrl + `/${id}`, data);
  }

  addCar(data : any) : Observable<any> {
    return this.http.post<any>(this.getCarsUrl, data);
  }

  removeCar(id: number) : Observable<any> {
    return this.http.delete<any>(this.getCarsUrl + `/${id}`);
  }


}
