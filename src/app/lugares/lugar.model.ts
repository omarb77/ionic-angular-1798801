export class Lugar {
    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public imageUrl: string,
        public precio: number,
        public disponibleDesde: Date,
        public disponibleHasta: Date,
        public usuarioId: number,
        public firebaseId: string
    ){}
}