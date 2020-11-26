import { HttpClient } from '@angular/common/http';
import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { Reservacion } from './reservacion.model';
import { delay, take, tap, switchMap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface ReservacionData{
    apellido: string;
    desde: string;
    hasta: string;
    huespedes: number;
    id: number;
    imageUrl: string;
    lugarId: number;
    lugarTitulo: string;
    nombre: string;
    usuarioId: number;
}

@Injectable( {providedIn: 'root'})
export class ReservacionService {
    private _reservaciones= new BehaviorSubject<Reservacion[]>([]);

    constructor(private loginService: LoginService, private http: HttpClient){}

    fetchReservaciones(){
        let url: string= `https://bdlab01.firebaseio.com/reservaciones.json?orderBy="usuarioId"&equalTo=${this.loginService.usuarioId}`;
        return this.http.get<{[key: string]: ReservacionData}>(url).pipe(map(rsvDta =>{
            const reservaciones= [];
            for(const key in rsvDta){
                if(rsvDta.hasOwnProperty(key)){
                    reservaciones.push(new Reservacion(rsvDta[key].id, rsvDta[key].lugarId,
                        rsvDta[key].usuarioId, rsvDta[key].lugarTitulo, rsvDta[key].imageUrl, rsvDta[key].nombre, 
                        rsvDta[key].apellido, rsvDta[key].huespedes, new Date(rsvDta[key].desde), new Date(rsvDta[key].hasta), key))
                }
            }
            return reservaciones;
        }), tap(rsvs =>{
            this. _reservaciones.next(rsvs);
        }));
    }

    get reservaciones(){
        return this._reservaciones.asObservable();
    }

    addReservacion(lugarId: number, descripcion: string, imageUrl: string, 
    nombre: string, apellido: string, huespedes: number, desde: Date, hasta: Date){
        
        let firebaseId: string;
        const newReservacion = new Reservacion(Math.random()*100, lugarId, this.loginService.usuarioId,
        descripcion, imageUrl, nombre, apellido, huespedes, desde, hasta, null);
        return this.http.post<{name: string}>(`https://bdlab01.firebaseio.com/reservaciones.json`, {...newReservacion, firebaseId: null}).pipe(
            switchMap(resData => {
                firebaseId = resData.name;
                return this.reservaciones;
            }), take(1), tap(rsvs =>{
                this._reservaciones.next(rsvs.concat(newReservacion))
            }));
        
        /*console.log(newReservacion);
            return this._reservaciones.pipe(take(1), delay(1000), tap(rsvs => {
                this._reservaciones.next(rsvs.concat(newReservacion));
            }));*/
    }

    cancelarReservacion(firebaseId: string){
        return this.http.delete(`https://bdlab01.firebaseio.com/reservaciones/${firebaseId}.json`).pipe(
            switchMap(()=>{
                return this.reservaciones;
            }), take(1), tap(rsvs => {
                this._reservaciones.next(rsvs.filter( r=>{
                    r.firebaseId !== firebaseId;
                }));
            }));
    }
}