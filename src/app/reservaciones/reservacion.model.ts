import { NumericValueAccessor } from '@ionic/angular';

export class Reservacion{
    constructor(
        public id: number ,
        public lugarId: number ,
        public usuarioId: number ,
        public lugarTitulo: string ,
        public imageUrl: string,
        public nombre: string,
        public apellido: string,
        public huespedes: number,
        public desde: Date,
        public hasta: Date
    ){}
}