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
  isLoading = false;

  constructor(private reservacionService: ReservacionService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.reservacionSub= this.reservacionService.reservaciones.subscribe(rsvs =>{
      this.reservacionesCargadas = rsvs;
    })
  }

  ionViewWillEnter(){
   this.isLoading= true;
   this.reservacionService.fetchReservaciones().subscribe(() =>{
     this.isLoading=false;
   })
  }

  ngOnDestroy(){
    if(this.reservacionSub){
      this.reservacionSub.unsubscribe();
    }
  }

  onRemoveReservacion(firebaseId: string, slidingEl: IonItemSliding){
    slidingEl.close();
    this.loadingCtrl.create({message: 'cancelando reservacion...'}).then(loadingEl =>{
      this.reservacionService.cancelarReservacion(firebaseId).subscribe(() =>{
        loadingEl.dismiss();
      });
    })
    //ELIMINAR RSV
  }

}
