import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _usuarioLoggeado = false;
  private _usuarioId=1;

  get usuarioLoggeado(){
    return this._usuarioLoggeado;
  }
  get usuarioId(){
    return this._usuarioId;
  }

  constructor() { }

  login(){
    this._usuarioLoggeado = true;
  }

  logout(){
    this._usuarioLoggeado = false;
  }
}