import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanLoad {
    
    constructor(private LoginService: LoginService, private router: Router){}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.LoginService.usuarioLoggeado){
            this.router.navigateByUrl('/login');
        }
        return this.LoginService.usuarioLoggeado;
    };
}