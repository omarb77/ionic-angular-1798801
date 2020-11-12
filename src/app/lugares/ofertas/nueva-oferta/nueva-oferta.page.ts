import { Router } from '@angular/router';
import { LugaresService } from './../../lugares.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {

  form: FormGroup;
  constructor( private LugaresService: LugaresService, private router: Router) { }

  ngOnInit() {

    this.form= new FormGroup({
      titulo: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      descripcion: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.maxLength(180)]
      }),
      precio: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.min(1)]
      }),
      desde: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      hasta: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
    });
  }

  onCreateOffer(){
    this.LugaresService.addLugar(this.form.value.titulo, this.form.value.descripcion, 
      +this.form.value.precio, new Date(this.form.value.desde), new Date(this.form.value.hasta));
      this.form.reset();

      this.router.navigate(['/lugares/tabs/ofertas']);
  }
  
}

