import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.page.html',
  styleUrls: ['./nueva-oferta.page.scss'],
})
export class NuevaOfertaPage implements OnInit {

  form: FormGroup;
  constructor() { }

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
    console.log(this.form);
  }
  
}
