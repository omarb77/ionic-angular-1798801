import { ReservacionService } from './reservacion.service';
import { Reservacion } from './reservacion.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {

  reservacionesCargadas: Reservacion[];

  constructor(private ReservacionService: ReservacionService) { }

  ngOnInit() {
    this.reservacionesCargadas = this.ReservacionService.reservaciones;
  }

  onRemoveReservacion(id: number, slidingEl: IonItemSliding){
    slidingEl.close();
    //ELIMINAR RSV
  }

}
