import { LugarUbicacion } from './../../location.model';
import { Router } from '@angular/router';
import { LugaresService } from './../../lugares.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters= window.atob(base64Data);
  const bytesLength= byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);
  
  for(let sliceIndex=0; sliceIndex < slicesCount; ++sliceIndex){
    const begin= sliceIndex*sliceSize;
    const end= Math.min(begin + sliceSize, bytesLength);

    const bytes= new Array(end - begin);
    for(let offset=begin, i=0; offset< end; ++i, ++offset){
      bytes[i]= byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex]=new Uint8Array(bytes);
  }
  return new Blob(byteArrays, {type: contentType});
}

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
      ubicacion: new FormControl(null, {
        validators: [Validators.required]
      }),
      imagen: new FormControl(null)
    });
  }

  onCreateOffer(){
    if(!this.form.valid || !this.form.get('imagen').value){
      return;
    }
    console.log(this.form.value);

    this.LugaresService.addLugar(this.form.value.titulo, this.form.value.descripcion, 
      +this.form.value.precio, new Date(this.form.value.desde), new Date(this.form.value.hasta),
      this.form.value.ubicacion);
      this.form.reset();

      this.router.navigate(['/lugares/tabs/ofertas']);
  }

  onUbicacionSeleccionada(ubicacion: LugarUbicacion){
    this.form.patchValue({ubicacion: ubicacion})
  }
  
  onImagenSeleccionada(imageData: string | File){
    let imageFile;
    if(typeof imageData === 'string'){
      try{
        imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64', ''), 'image/jpeg');
      }
      catch(error){
        console.log(error);
          return;
      }
    }
      else{
        imageData=imageData;
      }
      this.form.patchValue({imagen: imageData});
  }

}

