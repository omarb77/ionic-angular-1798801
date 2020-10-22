import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar.model';


@Injectable({
  providedIn: 'root'
})

export class LugaresService {

  private _lugares: Lugar[] = [
    new Lugar(1, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200 ),
    new Lugar(2, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400),
    new Lugar(3, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800),

    new Lugar(11, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200 ),
    new Lugar(12, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400),
    new Lugar(13, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800),

    new Lugar(21, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200 ),
    new Lugar(22, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400),
    new Lugar(23, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800),

    new Lugar(31, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200 ),
    new Lugar(32, 'Depto. Las Torres', 'Apartamento con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/53/55/97/00/720x532/144271181.jpg', 2400),
    new Lugar(33, 'Cumbres Elite', 'Apartamento con excelente ubicacion', 'https://cf.bstatic.com/images/hotel/max1024x768/174/174836075.jpg', 1800),

    new Lugar(41, 'Quinta Gonzalez', 'Quinta con excelente ubicacion', 'https://img10.naventcdn.com/avisos/18/00/52/30/54/90/1200x1200/63671397.jpg', 1200 ),
  ];

  get lugares(){
    return[...this._lugares];
  }

  constructor() { }
  
  getLugar(id: number){
    return {...this._lugares.find( lu => lu.id === id )};
  }
}
