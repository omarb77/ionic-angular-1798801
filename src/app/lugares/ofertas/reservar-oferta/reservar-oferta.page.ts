import { Subscription } from 'rxjs';
import { LugaresService } from './../../lugares.service';
import { Lugar } from './../../lugar.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservar-oferta',
  templateUrl: './reservar-oferta.page.html',
  styleUrls: ['./reservar-oferta.page.scss'],
})
export class ReservarOfertaPage implements OnInit, OnDestroy {

  lugar: Lugar;
  lugarSub: Subscription;

  constructor(private route: ActivatedRoute, private NavCtrl: NavController, private LugaresService: LugaresService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lugarId')){
        this.NavCtrl.navigateBack('/lugares/tabs/ofertas');
        return;
      }
      this.lugarSub = this.LugaresService.getLugar(+paramMap.get('lugarId')).subscribe(lugar =>{
        this.lugar = lugar;
      });
    });
  }

  ngOnDestroy(){
    if(this.lugarSub){
      this.lugarSub.unsubscribe();
    }
  }
}
