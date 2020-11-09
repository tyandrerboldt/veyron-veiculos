import { VehicleModel } from './../../../core/domain/vehicle.model';
import { VehiclesService } from './../vehicles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  vehicle: VehicleModel

  form: FormGroup
  
  constructor(
    private service: VehiclesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder 
  ) {

    this.form = this.formBuilder.group({
      model: ["", Validators.required],
      board: ["", Validators.required],
      color: ["", Validators.required],
      year: ["", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ])],
      fuel: ["", Validators.required]
    })

    this.loadFormData()
  }

  ngOnInit(): void {}

  loadFormData = async () => {
    const id = +this.route.snapshot.paramMap.get("id")

    if(id){
      this.service.get(id).subscribe(res => {
        this.vehicle = res
        this.form.patchValue({
          model: this.vehicle.model,
          board: this.vehicle.board,
          color: this.vehicle.color,
          year: this.vehicle.year,
          fuel: this.vehicle.fuel,
        })
      })
    }    
  }
    
}
