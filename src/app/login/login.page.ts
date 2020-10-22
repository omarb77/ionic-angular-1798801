import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading: boolean = false;
  constructor(private LoginService: LoginService, private router: Router, private LoadingCtrl: LoadingController){ }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true;
    this.LoginService.login();
    
    this.LoadingCtrl.create({keyboardClose: true, message: 'Cargando ..'}).then(loadingEl =>{
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/lugares/tabs/busqueda');
      }, 3000);
    });
    
  }

}