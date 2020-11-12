import { Receta } from './receta.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[]= [
    {id: 1, titulo:'Pizza', imageUrl: 'https://www.dondeir.com/wp-content/uploads/2019/08/pizza-hut-cadenas-de-pizza-cdmx.jpg',
  ingredientes: ['pan', 'queso', 'tomate', 'peperoni']},
    {id: 2, titulo:'Tacos', imageUrl: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/tacos-campechanos.jpg', 
    ingredientes: ['carne', 'tortilla']},
    {id: 3, titulo:'Hanburguesa', imageUrl: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-casera.jpg', 
    ingredientes: ['pan', 'carne', 'jamon', 'queso', 'tomate', 'aguacate']},
  ];

  constructor() { }
  
  getAllRecetas(){
    return [...this.recetas];
  }

  getReceta(recetaId: number){
    return {...this.recetas.find(r => {
      return r.id === recetaId;
    })}
  }

  deleteReceta(recetaId: number){
    this.recetas=this.recetas.filter(receta => {
      return receta.id !== recetaId;
    });
  }
}
