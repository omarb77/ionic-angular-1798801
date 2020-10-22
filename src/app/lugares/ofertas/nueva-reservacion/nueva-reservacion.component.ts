import { Lugar } from './../../lugares/lugar.model';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-reservacion',
  templateUrl: './nueva-reservacion.component.html',
  styleUrls: ['./nueva-reservacion.component.scss'],
})
export class NuevaReservacionComponent implements OnInit {
  @Input() lugar: Lugar;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onBookPlace(){
    this.modalCtrl.dismiss({mensaje: 'Lugar Reservado'}, 'confirm');
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}