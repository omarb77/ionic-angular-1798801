import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Capacitor, Plugins } from '@capacitor/core';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    /*private splashScreen: SplashScreen,
    private statusBar: StatusBar,*/
    private loginService: LoginService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*this.statusBar.styleDefault();
      this.splashScreen.hide();*/
      if(Capacitor.isPluginAvailable('SplashScreen')){
        Plugins.SplashScreen.hide();
      }
    });
  }

  onLogout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
