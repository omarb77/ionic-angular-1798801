import { LugaresService } from './../../lugares.service';
import { Lugar } from './../../lugar.model';
import { NuevaReservacionComponent } from './../../../reservaciones/nueva-reservacion/nueva-reservacion.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})

export class DetalleLugarPage implements OnInit {

  lugarActual: Lugar;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private lugarService: LugaresService,
    private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lugarId')){
        this.navCtrl.navigateBack('/lugares/tabs/busqueda');
        return;
      }
      this.lugarActual = this.lugarService.getLugar(+paramMap.get('lugarId'));
    });
  }
  

  onReservarLugar(){
    //this.router.navigateByUrl('/lugares/tabs/busqueda');
    //this.navCtrl.pop();
    //this.navCtrl.navigateBack('/lugares/tabs/busqueda');

    this.actionSheetCtrl.create({
      header: 'Selecciona acction',
      buttons: [
        {text: 'Seleccionar Fecha', handler: () => {
          this.openReservarModal('select');
        }},
        {text: 'Fecha al Azar' , handler: () => {
          this.openReservarModal('random');
        }},

        {text: 'Cancelar' , role:'cancel'}
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
    
      this.modalCtrl.create({component: NuevaReservacionComponent, componentProps: {lugar: this.lugarActual}})
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData);
      });
  }    

  openReservarModal(mode: 'select' | 'random'){
    console.log(mode);
  }
}
  

