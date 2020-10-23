import { Lugar } from './../../lugar.model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../../lugares.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})
export class EditarOfertaPage implements OnInit {

  lugar: Lugar;
  form: FormGroup;

  constructor(private route: ActivatedRoute,private lugarService: LugaresService, private navCtrl: NavController) {}

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      if(!param.has('lugarId')){
        this.navCtrl.navigateBack('lugares/tabs/ofertas');
        return;
      }
      this.lugar = this.lugarService.getLugar(+param.get('lugarId'));
      this.form = new FormGroup({
        titulo: new FormControl(this.lugar.titulo, {
          updateOn: 'blur', validators: [Validators.required]
        }),
        descripcion: new FormControl(this.lugar.descripcion, {
          updateOn: 'blur', validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });
  }

  onUpdateOffer(){
    if(!this.form.valid){
      return;
    }
  }

  onCreateOffer(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form);
  }
  
}
