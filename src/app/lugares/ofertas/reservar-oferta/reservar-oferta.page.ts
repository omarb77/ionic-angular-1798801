import { LugaresService } from './../../lugares.service';
import { Lugar } from './../../lugar.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservar-oferta',
  templateUrl: './reservar-oferta.page.html',
  styleUrls: ['./reservar-oferta.page.scss'],
})
export class ReservarOfertaPage implements OnInit {

  lugar: Lugar;

  constructor(private route: ActivatedRoute, private NavCtrl: NavController, private LugaresService: LugaresService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('lugarId')){
        this.NavCtrl.navigateBack('/lugares/tabs/ofertas');
        return;
      }
      this.lugar = this.LugaresService.getLugar(+paramMap.get('lugarId'));
    });
  }

}
