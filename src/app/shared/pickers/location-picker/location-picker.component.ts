import { LugarUbicacion } from './../../../lugares/location.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { MapModalComponent } from './../../map-modal/map-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})

export class LocationPickerComponent implements OnInit {

  selectedLocationImage: string;

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {}

  onPickLocation(){
    this.modalCtrl.create({component: MapModalComponent}).then(modalEl =>{
      modalEl.onDidDismiss().then(modalData =>{
        console.log(modalData);
        if(!modalData.data){
          return;
        }
        else{
          const pickedLocation: LugarUbicacion ={
            lat: modalData.data.lat,
            lng: modalData.data.lng,
            address: null,
            staticMapImageUrl: null
          }
          this.getAddress(modalData.data.lat, modalData.data.lng).pipe(switchMap(address =>{
            pickedLocation.address = address;
            return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 16));
          })
          ).subscribe(staticMap =>{
            pickedLocation.staticMapImageUrl =staticMap;
            this.selectedLocationImage=staticMap;
          })
        }
      });
      modalEl.present();
    });
  }

  private getAddress(lat: number, lng: number){
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`).
    pipe(map(geoData =>{
      console.log(geoData =>{
        console.log(geoData);
        if(!geoData || !geoData.results || geoData.results.length === 0){
          return null;
        }
        else{
          return geoData.results[0].formatted_address;
        }
      })
    }));
  }

  private getMapImage(lat: number, lng: number, zoom: number){
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap&markers=color:
    red%7Clabel:Lugar%7C${lat},${lng}&key=${environment.googleMapsAPIKey}`;
  }
}
