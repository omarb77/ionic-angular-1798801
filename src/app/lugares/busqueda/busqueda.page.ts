import { LugaresService } from './../lugares.service';
import { Lugar } from './../lugar.model';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  lugaresCargados: Lugar[];

  constructor(private LugaresService: LugaresService, private menuCtrl: MenuController){}

  ngOnInit() {
    this.lugaresCargados = this.LugaresService.lugares;
  }
  
  openSideMenu(){
    this.menuCtrl.open();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
  
}
