import { VehicleModel } from './../../../core/domain/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { mock } from '../vehicles-mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  vehicles:VehicleModel[] = mock.data;

  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
