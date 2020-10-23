import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading: boolean = false;
  isLoginMode: boolean = true;
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
      }, 1000);
    });
    
  }

  onSubmit(form: NgForm){

    if(!form.valid){
      return false;
    }

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
      //LLAMADA A WS DE LOGIN
    }
    else{
      //LLAMADA A WS DE REGISTRO
    }

  }

  onSwitchAuthMode(){
      this.isLoginMode = !this.isLoginMode;
  }

}
