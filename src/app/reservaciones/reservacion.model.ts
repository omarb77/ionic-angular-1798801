import { NumericValueAccessor } from '@ionic/angular';

export class Reservacion{
    constructor(
        public id: number ,
        public lugarId: number ,
        public usuarioId: number ,
        public lugarTitulo: string ,
        public huespedes: number,
    ){}
}