import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-plantillavehiculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-plantillavehiculo.html',
  styleUrl: './form-plantillavehiculo.css',
})
export class FormPlantillaVehiculo {

  vehiculos: any[] = [];

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }

    let obj = form.value;

     console.log('Datos del vehículo:', obj);

    console.log('Placa:', obj.placa);
    console.log('Marca:', obj.marca);
    console.log('Modelo:', obj.modelo);
    console.log('Año:', obj.anio);
    console.log('Kilometraje:', obj.kilometraje);
    console.log('Tipo de vehículo:', obj.tipo);
    console.log('Combustible:', obj.combustible);
    console.log('Observaciones:', obj.observaciones);

    this.vehiculos.push(obj);

    form.resetForm();
  }

}
