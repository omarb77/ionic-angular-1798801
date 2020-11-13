import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  private _usuarioLoggeado = false;
  private _usuarioId=1;
=======
  private _usuarioLoggeado = true;
>>>>>>> 410313d4de168cc3cc2f33538a16f0ea635f2051

  get usuarioLoggeado(){
    return this._usuarioLoggeado;
  }

<<<<<<< HEAD
  get usuarioId(){
    return this._usuarioId;
  }
=======
>>>>>>> 410313d4de168cc3cc2f33538a16f0ea635f2051
  constructor() { }

  login(){
    this._usuarioLoggeado = true;
  }

  logout(){
    this._usuarioLoggeado = false;
  }
}