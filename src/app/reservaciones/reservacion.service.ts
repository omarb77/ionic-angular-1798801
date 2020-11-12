import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { Reservacion } from './reservacion.model';
import { delay, take, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable( {providedIn: 'root'})
export class ReservacionService {
    private _reservaciones= new BehaviorSubject<Reservacion[]>([]);

    constructor(private loginService: LoginService){}

    get reservaciones(){
        return this._reservaciones.asObservable();
    }

    addReservacion(lugarId: number, descripcion: string, imageUrl: string, 
    nombre: string, apellido: string, huespedes: number, desde: Date, hasta: Date){
        
        const newReservacion = new Reservacion(Math.random()*100, lugarId, this.loginService.usuarioId,
        descripcion, imageUrl, nombre, apellido, huespedes, desde, hasta);
        console.log(newReservacion);
            return this._reservaciones.pipe(take(1), delay(1000), tap(rsvs => {
                this._reservaciones.next(rsvs.concat(newReservacion));
            }));
        }

    cancelarReservacion(reservacionId: number){
        console.log(reservacionId);
        console.log(this.reservaciones);
        return this.reservaciones.pipe(take(1), delay(1000), tap(rsvs =>{
            this._reservaciones.next(rsvs.filter(r =>{
                r.id != reservacionId;
            }));
        }));
    }
}