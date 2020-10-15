import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onReservarLugar(){
    //this.router.navigateByUrl('/lugares/tabs/busqueda');
    //this.navCtrl.pop();
    this.navCtrl.navigateBack('/lugares/tabs/busqueda');
  }
}
