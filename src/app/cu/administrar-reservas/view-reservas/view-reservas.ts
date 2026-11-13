
import { Component } from '@angular/core';
import { ModalReserva } from '../modal-reserva/modal-reserva';

@Component({
  selector: 'app-view-reservas',
  imports: [ModalReserva],
  templateUrl: './view-reservas.html',
  styleUrl: './view-reservas.css',
})
export class ViewReservas {

  reservas: any[] = [
    {
      id: 1,
      cliente: 'Carlos Pérez',
      cancha: 'Fútbol 7',
      fecha: '2026-11-15',
      hora: '16:00',
      estado: 'Confirmada'
    },
    {
      id: 2,
      cliente: 'María Torres',
      cancha: 'Vóley',
      fecha: '2026-11-16',
      hora: '10:00',
      estado: 'Pendiente'
    },
    {
      id: 3,
      cliente: 'Luis Mendoza',
      cancha: 'Básquet',
      fecha: '2026-11-17',
      hora: '18:30',
      estado: 'Confirmada'
    },
    {
      id: 4,
      cliente: 'Ana Flores',
      cancha: 'Fútbol 11',
      fecha: '2026-11-18',
      hora: '15:00',
      estado: 'Cancelada'
    }
  ];

  mostrarModal = false;
  reservaSeleccionada: any = null;

  editarReserva(reserva: any) {
    this.reservaSeleccionada = { ...reserva };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.reservaSeleccionada = null;
  }

  guardarReserva(reservaActualizada: any) {

  console.log('Datos de la reserva:', reservaActualizada);
  console.log('ID:', reservaActualizada.id);
  console.log('Cliente:', reservaActualizada.cliente);
  console.log('Cancha:', reservaActualizada.cancha);
  console.log('Fecha:', reservaActualizada.fecha);
  console.log('Hora:', reservaActualizada.hora);
  console.log('Estado:', reservaActualizada.estado);

  this.reservas = this.reservas.map(reserva =>
    reserva.id === reservaActualizada.id
      ? reservaActualizada
      : reserva
  );

  console.log('Lista actualizada:', this.reservas);

  this.cerrarModal();
}

}
