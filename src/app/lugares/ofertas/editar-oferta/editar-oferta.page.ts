import { Subscription } from 'rxjs';
import { Lugar } from './../../lugar.model';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from './../../lugares.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})

export class EditarOfertaPage implements OnInit, OnDestroy {

  lugar: Lugar;
  form: FormGroup;
  lugarSub:Subscription;

  constructor(private route: ActivatedRoute,
              private lugarService: LugaresService,
              private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private router: Router) {}

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      if(!param.has('lugarId')){
        this.navCtrl.navigateBack('lugares/tabs/ofertas');
        return;
      }
      this.lugarSub = this.lugarService.getLugar(+param.get('lugarId')).subscribe(lugar =>{
        this.lugar = lugar;
        this.form = new FormGroup({
          titulo: new FormControl(this.lugar.titulo, {
            updateOn: 'blur', validators: [Validators.required]
          }),
          decripcion: new FormControl(this.lugar.descripcion, {
            updateOn: 'blur', validators: [Validators.required, Validators.maxLength(180)]
            })
          });
        });
      });
  }

  OnDestroy(){
    if(this.lugarSub){
      this.lugarSub.unsubscribe();
    }
  }
  onUpdateOffer(){
    if(!this.form.valid){
      return;
    }

    this.loadingCtrl.create({
      message: 'Actualizando lugar ...'
    }).then(loadEl =>{
      loadEl.present();
      this.lugarService.updateLugar(this.lugar.id,
        this.form.value.titulo, this.form.value.descripcion).subscribe(()=>{
          loadEl.dismiss();
          this.form.reset();
          this.router.navigate(['/lugares/tabs/ofertas']);
        });
    });
  }

  onCreateOffer(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form);
  }
  
}

