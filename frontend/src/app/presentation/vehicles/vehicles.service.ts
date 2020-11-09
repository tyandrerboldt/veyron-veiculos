import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { VehicleModel } from './../../core/domain/vehicle.model';
import { HttpService } from './../../services/http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  uri = "vehicles"

  constructor(
    private http: HttpService
  ) {
   }

  getAll(): Observable<VehicleModel[]>{
    return this.http.getAll<VehicleModel[]>(this.uri)
  }

  get(id: number): Observable<VehicleModel>{
    return this.http.get<VehicleModel>(this.uri, id)
  }

  delete(id: number): Observable<VehicleModel | {}>{
    return this.http.delete<VehicleModel>(this.uri, id).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    alert(e);
    return EMPTY;
  }

}
