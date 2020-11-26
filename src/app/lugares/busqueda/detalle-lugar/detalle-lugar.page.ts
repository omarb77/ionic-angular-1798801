import { LugaresService } from './../../lugares.service';
import { Lugar } from './../../lugar.model';
import { NuevaReservacionComponent } from './../../../reservaciones/nueva-reservacion/nueva-reservacion.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ReservacionService } from 'src/app/reservaciones/reservacion.service';
import { ok } from 'assert';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})

export class DetalleLugarPage implements OnInit, OnDestroy {

  lugarActual: Lugar;
  lugarSub: Subscription;
  isLoading = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private lugarService: LugaresService,
    private actionSheetCtrl: ActionSheetController,
    private reservacionService: ReservacionService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lugarId')){
        this.navCtrl.navigateBack('/lugares/tabs/busqueda');
        return;
      }
      this.isLoading= true;
      this.lugarSub = this.lugarService.getLugar(paramMap.get('lugarId')).subscribe(lugar =>{
        this.lugarActual = lugar;
        this.isLoading= false;
        }, error =>{
          this.alertCtrl.create({
            header: 'Error',
            message: 'Error al obtener el lugar',
            buttons: [ {text: 'ok', handler: () =>{
              this.router.navigate(['lugares/tabs/busqueda']);
            }}
          ]}).then(alertEl => {
            alertEl.present();
          });
        });
    });
  }
  
  ngOnDestroy(){
    if(this.lugarSub){
      this.lugarSub.unsubscribe();
    }
  }

  onReservarLugar(){
    this.actionSheetCtrl.create({
      header: 'selecciona accion',
      buttons: [{
        text: 'seleccionar fecha', handler: ()=>{
          this.openReservarModal('select');
        }},
      {text: 'fecha al azar', handler: ()=>{
        this.openReservarModal('random');
      }},
    {text: 'cancelar', role:'cancel'}
  ]
  }).then(actionSheetEl =>{
    actionSheetEl.present();
  });
  
  }
  openReservarModal(mode: 'select' | 'random'){
    console.log(mode);
  
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
    
      this.modalCtrl.create({component: NuevaReservacionComponent, componentProps: {lugar: this.lugarActual, mode: mode}})
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData);
        if(resultData.role === 'confirm'){
          this.loadingCtrl.create({message: 'haciendo reservacion...'}).then(loadingEl =>{
            loadingEl.present();
            const data = resultData.data.reservacion;
            this.reservacionService.addReservacion( this.lugarActual.id,
            this.lugarActual.titulo,
            this.lugarActual.imageUrl,
            data.nombre,
            data.apellido,
            data.numeroHuespedes,
            data.desde,
            data.hasta).subscribe(()=>{
              loadingEl.dismiss();
            });
          }
        );
        
        }
      });
  }    

}


