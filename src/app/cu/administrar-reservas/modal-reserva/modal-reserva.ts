
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-reserva',
  imports: [FormsModule],
  templateUrl: './modal-reserva.html',
  styleUrl: './modal-reserva.css',
})
export class ModalReserva {

  reserva = input<any>();

  cerrar = output<void>();
  guardar = output<any>();

  datosReserva: any = {
    cliente: '',
    cancha: '',
    fecha: '',
    hora: '',
    estado: 'Confirmada'
  };

  ngOnInit() {
    this.datosReserva = { ...this.reserva() };
  }

  guardarCambios() {
    this.guardar.emit({
      ...this.datosReserva,
      id: this.reserva()?.id
    });
  }
}
