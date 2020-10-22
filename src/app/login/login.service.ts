import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _usuarioLoggeado = false;

  get usuarioLoggeado(){
    return this._usuarioLoggeado;
  }

  constructor() { }

  login(){
    this._usuarioLoggeado = true;
  }

  logout(){
    this._usuarioLoggeado = false;
  }
}