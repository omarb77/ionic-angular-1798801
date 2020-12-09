import { Capacitor, Plugins } from '@capacitor/core';
import { LugarUbicacion, Coordenadas } from './../../../lugares/location.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { MapModalComponent } from './../../map-modal/map-modal.component';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})

export class LocationPickerComponent implements OnInit {

  @Output() ubicacionSelected = new EventEmitter<LugarUbicacion>()
  selectedLocationImage: string;

  constructor(private modalCtrl: ModalController, private http: HttpClient, private actionSheet: ActionSheetController,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  onPickLocation(){
    this.actionSheet.create({header: 'Selecciona', buttons: [
      {text: 'Ubicacion Actual', handler: ()=>{
        this.ubicacionUsuario();
      }},
      {text: 'Ubicacion en el Mapa', handler: ()=>{
        this.openMap();
      }},
      {text: 'cancelar', role: 'Cancel'}
    ]}).then(actionEl => {
      actionEl.present();
    });
  }

  showAlertLocationError(){
    this.alertCtrl.create({header: 'No se pudo acceder a la ubicación', 
    message:'Intentelo de nuevo', buttons: ['OK']});
  }

  ubicacionUsuario(){
    if(!Capacitor.isPluginAvailable('Geolocation')){
      this.showAlertLocationError();
      return;
    }

    Plugins.Geolocation.getCurrentPosition().then(geolocation =>{
      const coords: Coordenadas = {
        lat: geolocation.coords.latitude, lng: geolocation.coords.longitude};
        this.crearPunto(coords.lat, coords.lng);
    }).catch(err =>{
      this.showAlertLocationError();
    });
  }

  openMap(){
    this.modalCtrl.create({component: MapModalComponent}).then(modalEl =>{
      modalEl.onDidDismiss().then(modalData =>{
        console.log(modalData);
        if(!modalData.data){
          return;
        }
        else{
          this.crearPunto(modalData.data.lat, modalData.data.lng);
        }
      });
      modalEl.present();
    });
  }

  private crearPunto(lat: number, lng: number){
    const pickedLocation: LugarUbicacion ={
      lat: lat,
      lng: lng,
      address: null,
      staticMapImageUrl: null
    }

    this.getAddress(lat, lng).pipe(switchMap(address =>{
      pickedLocation.address = address;
      return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 16));
    })
    ).subscribe(staticMap =>{
      pickedLocation.staticMapImageUrl = staticMap;
      this.selectedLocationImage = staticMap;
      this.ubicacionSelected.emit(pickedLocation);
    })
  }
  private getAddress(lat: number, lng: number){
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`).
    pipe(map(geoData =>{
        console.log(geoData);
        if(!geoData || !geoData.results || geoData.results.length === 0){
          return null;
        }
        else{
          return geoData.results[0].formatted_address;
        }
    }));
  }

  private getMapImage(lat: number, lng: number, zoom: number){
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap&markers=color:
    red%7Clabel:Lugar%7C${lat},${lng}&key=${environment.googleMapsAPIKey}`;
  }
}
