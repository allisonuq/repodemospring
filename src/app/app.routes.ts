import { Routes } from '@angular/router';
import { ViewReservas } from './cu/administrar-reservas/view-reservas/view-reservas';
export const routes: Routes = [
    {
  path: 'reservas',
  component: ViewReservas,
  title: 'Gestión de reservas'
}
];
