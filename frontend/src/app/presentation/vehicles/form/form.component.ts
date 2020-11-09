import { map } from 'rxjs/operators';
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

  id: number

  vehicle: VehicleModel

  fuelOptions: {}[]

  form: FormGroup

  submited: boolean
  
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

    this.submited = false

    this.loadFormData()
  }

  ngOnInit(): void {}

  save = () => {
    this.submited = true
    if(this.form.valid){
      if(this.id){
        this.service.update(this.form.getRawValue(), this.id).subscribe(res => {
          alert("Atualizado com sucesso")
        })
      }else{
        this.service.create(this.form.getRawValue()).subscribe(res => {
          alert("Criado com sucesso")
        })
      }
    }
  }

  loadFormData = async () => {
    this.fuelOptions = this.loadOptions()

    this.id = +this.route.snapshot.paramMap.get("id")

    if(this.id){
      this.service.get(this.id).subscribe(res => {
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

  loadOptions = ():{value:string, text:string}[] => {
    return [
      {
        value: "",
        text: "Selecione"
      },
      {
        value: "alcool",
        text: "Álcool"
      },
      {
        value: "gasoline",
        text: "Gasolina"
      },
      {
        value: "diesel",
        text: "Diesel"
      },
      {
        value: "flex",
        text: "Flex"
      },
    ]
  }

  getOptionText(value: string): string{
    const options = this.loadOptions()
    const text = options.filter(option => option.value === value)[0].text
    return (text) ? text : 'Desconhecido'
  }
    
}
