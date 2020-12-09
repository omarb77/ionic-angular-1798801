import { LugarUbicacion } from './location.model';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './../login/login.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar.model';
import { BehaviorSubject, of} from 'rxjs';
import { take, map, tap, delay, switchMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateTimeFormat } from '@angular/common';

interface LugarData{
  descripcion: string;
  disponibleDesde: string;
  disponibleHasta: string;
  id: number;
  imageUrl: string;
  precio: number;
  titulo: string;
  usuarioId: number;
  ubicacion: LugarUbicacion;
}

@Injectable({
  providedIn: 'root'
})

export class LugaresService {

  private _lugares = new BehaviorSubject<Lugar[]>( [
  /*  new Lugar(1, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200, new Date('2020-10-1'), new Date('2020-10-1'), 1 ),
    new Lugar(2, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400, new Date('2020-10-1'), new Date('2020-10-1'), 1),
    new Lugar(3, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800, new Date('2020-10-1'), new Date('2020-10-1'), 1),

    new Lugar(11, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200, new Date('2020-10-1'), new Date('2020-10-1'), 1 ),
    new Lugar(12, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400, new Date('2020-10-1'), new Date('2020-10-1'), 1),
    new Lugar(13, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800, new Date('2020-10-1'), new Date('2020-10-1'), 1),
*/
  ]);

  get lugares(){
    return this._lugares.asObservable();
  }

  constructor(private loginService: LoginService, private http: HttpClient) {}
  
  fetchLugares(){
    return this.http.get<{[key: string]:LugarData}>(`https://bdlab01.firebaseio.com/ofertas-lugares.json`).pipe(map(dta =>{
      const lugares = [];
      for(const key in dta){
        if(dta.hasOwnProperty(key)){
          lugares.push(
            //dta
            new Lugar(dta[key].id, dta[key].titulo, dta[key].descripcion, dta[key].imageUrl, dta[key].precio, new Date(dta[key].disponibleDesde),
            new Date(dta[key].disponibleHasta), dta[key].usuarioId, key, dta[key].ubicacion)
          )
        }
      }
      return lugares;
    }),
    tap(lugares =>{
      this._lugares.next(lugares)
    }));
  }

  getLugar(firebaseId: string){
    return this.http.get<LugarData>(`https://bdlab01.firebaseio.com/ofertas-lugares/${firebaseId}.json`).pipe(
      map(dta =>{
        return new Lugar(dta.id, dta.titulo, dta.descripcion, dta.imageUrl, dta.precio,
          new Date(dta.disponibleDesde), new Date(dta.disponibleHasta), dta.usuarioId, firebaseId, dta.ubicacion);
      })
    );
  }

  addLugar(titulo: string, descripcion: string, precio: number, disponibleDesde: Date, disponibleHasta: Date, ubicacion: LugarUbicacion){

    const newLugar = new Lugar(
      Math.random(),
      titulo,
      descripcion, //
      'https://img10.naventcdn,com/avisos/18/00/53/55/97/00/720x532/144271181.jpg',
      precio, 
      disponibleDesde,
      disponibleHasta,
      this.loginService.usuarioId,
      '',
      ubicacion
    );

    this.http.post<any>(`https://bdlab01.firebaseio.com/ofertas-lugares.json`, {...newLugar, firebaseId: null}).subscribe(data => {
      console.log(data);
      return this._lugares.pipe(take(1)).subscribe(lugares =>{
        this._lugares.next(lugares.concat(newLugar));
      });
    });
  }

  updateLugar(lugarId: string, titulo: string, descripcion: string){
    let nuevosLugares: Lugar[];
    return this.lugares.pipe(take(1), 
    switchMap(lugares =>{
      if(!lugares || lugares.length <=0){
        return this.fetchLugares();
      }
      else{
        return of(lugares);
      }
    }),
    switchMap(lugares => {
      const index = lugares.findIndex(lu => lu.firebaseId === lugarId);
      const nuevosLugares = [...lugares];
      const old = nuevosLugares[index];
      nuevosLugares[index] = new Lugar(old.id, titulo, descripcion, old.imageUrl,
        old.precio, old.disponibleDesde, old.disponibleHasta, old.usuarioId, '', old.ubicacion);

        return this.http.put(`https://bdlab01.firebaseio.com/ofertas-lugares/${lugarId}.json`, {...nuevosLugares[index]});
    }), tap(() => {
          this._lugares.next(nuevosLugares);
    })
    );
  }
}
