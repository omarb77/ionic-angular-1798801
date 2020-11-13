import { Injectable } from '@angular/core';
import { Reservacion } from './reservacion.model';

@Injectable( {providedIn: 'root'})
export class ReservacionService {
    private _reservaciones: Reservacion[] = [
        {id: 1, lugarId: 1, usuarioId: 1, lugarTitulo: 'Quinta el Refugio', huespedes: 2}   
    ];

    get reservaciones(){
        return [...this._reservaciones];
    }
}