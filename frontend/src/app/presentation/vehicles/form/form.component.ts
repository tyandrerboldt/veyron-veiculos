import { fuelOptions } from './../../../core/helpers/FuelOptions';
import { VehicleModel } from './../../../core/domain/vehicle.model';
import { VehiclesService } from './../vehicles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: number

  vehicle: VehicleModel

  fuelOptions: {}[]

  form: FormGroup

  error = false
  errorMessage = ""

  submited: boolean
  
  constructor(
    private service: VehiclesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder 
  ) {

    this.form = this.formBuilder.group({
      model: ["", Validators.required],
      board: ["", Validators.compose([
        Validators.required,
        Validators.minLength(7)
      ])],
      color: ["", Validators.required],
      year: ["", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ])],
      fuel: ["", Validators.required]
    })

    this.submited = false

    this.loadFormData()
  }

  ngOnInit(): void {}

  save = () => {
    this.submited = true
    if(this.form.valid){
      if(this.id){
        this.service.update(this.form.getRawValue(), this.id).subscribe(res => {
          this.router.navigate(['/vehicles'])
        })
      }else{
        this.service.create(this.form.getRawValue()).subscribe(res => {
          this.router.navigate(['/vehicles'])
        })
      }
    }
  }

  loadFormData = async () => {
    this.fuelOptions = fuelOptions

    this.id = +this.route.snapshot.paramMap.get("id")

    if(this.id){
      this.service.get(this.id).toPromise().then(res => {
        this.vehicle = res
        this.form.patchValue({
          model: this.vehicle.model,
          board: this.vehicle.board,
          color: this.vehicle.color,
          year: this.vehicle.year,
          fuel: this.vehicle.fuel,
        })
      }).catch(err => {
        this.error = true
        this.errorMessage = err.error.message     
      })    
    }    
  }    
}
