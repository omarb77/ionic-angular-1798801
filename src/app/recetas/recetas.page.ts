import { RecetasService } from './recetas.service';
import { Receta} from './receta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  
  recetas: Receta[];

  constructor(private recetasService: RecetasService){}

  ngOnInit() {
    //this.recetas = this.recetasService.getAllRecetas();
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
   console.log('ionViewWillEnter');
   this.recetas = this.recetasService.getAllRecetas();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
   }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }
}
