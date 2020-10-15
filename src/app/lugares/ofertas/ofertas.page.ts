import { Lugar } from './../lugar.model';
import { LugaresService } from './../lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas: Lugar[];

  constructor(private offersService: LugaresService) { }

  ngOnInit() {
    this.ofertas = this.offersService.lugares;
  }

}

