import { Subscription } from 'rxjs';
import { ReservacionService } from './reservacion.service';
import { Reservacion } from './reservacion.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit, OnDestroy {

  reservacionesCargadas: Reservacion[];
  private reservacionSub: Subscription;

  constructor(private ReservacionService: ReservacionService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.reservacionSub= this.ReservacionService.reservaciones.subscribe(rsvs =>{
      this.reservacionesCargadas = rsvs;
    })
  }

  ngOnDestroy(){
    if(this.reservacionSub){
      this.reservacionSub.unsubscribe();
    }
  }

  onRemoveReservacion(id: number, slidingEl: IonItemSliding){
    slidingEl.close();
    this.loadingCtrl.create({message: 'cancelando reservacion...'}).then(loadingEl =>{
      this.ReservacionService.cancelarReservacion(id).subscribe(() =>{
        loadingEl.dismiss();
      });
    })
    //ELIMINAR RSV
  }

}
