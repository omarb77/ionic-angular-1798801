import { Lugar } from './../lugar.model';
import { LugaresService } from './../lugares.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif, Subscription} from 'rxjs';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit, OnDestroy {

  ofertas: Lugar[];
  private lugaresSub: Subscription;
  isLoading= false;

  constructor(private offersService: LugaresService, private router: Router) { }

  ngOnInit() {
    this.lugaresSub = this.offersService.lugares.subscribe(lugares =>{
      this.ofertas = lugares;
    });
  }

  ionViewWillEnter(){
    this.isLoading= true;
    this.offersService.fetchLugares().subscribe( ()=>{
      this.isLoading = false;
    });
  }
  ngOnDestroy(){
    if(this.lugaresSub){
      this.lugaresSub.unsubscribe();
    }
  }

  onEdit(firebaseId: string){
    this.router.navigate(['/', 'lugares', 'tabs', 'ofertas', 'edit', firebaseId]);
  }

}

