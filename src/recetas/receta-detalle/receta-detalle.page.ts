import { Receta } from './../receta.model';
import { RecetasService } from './../recetas.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import { AlertController} from '@ionic/angular';


@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
})

export class RecetaDetallePage implements OnInit {

  recetaActual: Receta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetasService: RecetasService,
    private router: Router, 
    private alertCtrl: AlertController){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const param: string = 'recetaId';
      if(!paramMap.has(param)){
        //redirect
        this.router.navigate(['/recetas']);
        return;
      }
      const recetaId: number= +paramMap.get(param);
      this.recetaActual= this.recetasService.getReceta(recetaId);
    });
  }

  onDeleteReceta(){
    this.alertCtrl.create({
      header: 'Estas seguro?',
      message: 'Reaalmente quieres borrar esta receta?',
      buttons: [
        {text: 'Cancelar', role: 'cancel'},
        {text: 'Eliminar', handler: ()=>{
          this.recetasService.deleteReceta(this.recetaActual.id);
          this.router.navigate(['/recetas']);
        }}
      ]
    }).then(alert => {
      alert.present();
    })
  }

}
