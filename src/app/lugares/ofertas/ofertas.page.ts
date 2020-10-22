import { Lugar } from './../lugar.model';
import { LugaresService } from './../lugares.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas: Lugar[];

  constructor(private offersService: LugaresService, private router: Router) { }

  ngOnInit() {
    this.ofertas = this.offersService.lugares;
  }

  onEdit(id: number){
    this.router.navigate(['/', 'lugares', 'tabs', 'ofertas', 'edit', id]);
  }

}

