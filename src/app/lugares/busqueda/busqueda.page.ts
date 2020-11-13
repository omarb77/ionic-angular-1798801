import { LoginService } from './../../login/login.service';
import { LugaresService } from './../lugares.service';
import { Lugar } from './../lugar.model';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail} from '@ionic/core';
<<<<<<< HEAD
import { Subscription } from 'rxjs';
=======
>>>>>>> 410313d4de168cc3cc2f33538a16f0ea635f2051

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})

export class BusquedaPage implements OnInit, OnDestroy {

  lugaresCargados: Lugar[];
  lugaresListados: Lugar[];
  lugaresRelevantes: Lugar[];
  private lugaresSub: Subscription;

  constructor(private LugaresService: LugaresService, 
              private menuCtrl: MenuController,
              private loginService: LoginService){}

  ngOnInit() {
    this.lugaresSub = this.LugaresService.lugares.subscribe(lugares => {
      this.lugaresCargados = lugares;
      this.lugaresRelevantes = this.lugaresCargados;
      this.lugaresListados = this.lugaresRelevantes.slice();
    });
  }
  
  OnDestroy(){
    if(this.lugaresSub){
      this.lugaresSub.unsubscribe();
    }
  }
  openSideMenu(){
    this.menuCtrl.open();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
<<<<<<< HEAD

    if(event.detail.value === 'todos'){
      this.lugaresRelevantes = this.lugaresCargados;
      this.lugaresListados = this.lugaresRelevantes.slice(1);
    } else{
      this.lugaresRelevantes= this.lugaresCargados.filter(lugar => 
      lugar.usuarioId !== this.loginService.usuarioId);
      this.lugaresListados = this.lugaresRelevantes.slice(1);
    }
=======
>>>>>>> 410313d4de168cc3cc2f33538a16f0ea635f2051
  }
  
}
