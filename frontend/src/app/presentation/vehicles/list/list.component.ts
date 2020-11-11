import { getOptionText } from './../../../core/helpers/FuelOptions';
import { VehiclesService } from './../vehicles.service';
import { VehicleModel } from './../../../core/domain/vehicle.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  vehicles: VehicleModel[] = [];

  constructor(
    private service: VehiclesService
  ) {
  }

  ngOnInit(): void {
    this.getVehicles()
  }

  getVehicles = async () => {
    this.service.getAll().subscribe(res => {
      this.vehicles = res.map(vehicle => {
        return {
          ...vehicle,
          fuel: getOptionText(vehicle.fuel)
        }
      })
    })
  }

  deleteVehicle = (id: number) => {
    const index = this.vehicles.indexOf(this.vehicles.filter(vehicle => vehicle.id === id)[0])
    if (index >= 0) {      
      this.service.delete(id).subscribe(() => {
        this.vehicles.splice(index, 1)
      })
    }
  }
}
