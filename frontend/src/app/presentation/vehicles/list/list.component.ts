import { VehiclesService } from './../vehicles.service';
import { VehicleModel } from './../../../core/domain/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
// import { mock } from '../vehicles-mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  vehicles:VehicleModel[] = [];

  constructor(
    private service: VehiclesService
  ) { 
  }
  
  ngOnInit(): void {
    this.getVehicles()
  }

  getVehicles = async () => {
    this.service.getAll().subscribe(res => {
      this.vehicles = res
    })
  }

  deleteVehicle = (vehicle: VehicleModel) => {
    const index = this.vehicles.indexOf(vehicle)
    this.service.delete(vehicle.id).subscribe(() => {
      this.vehicles.splice(index, 1)    
    })    
  } 

}
