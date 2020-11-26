export interface Coordenadas{
    lat: number;
    lng: number;
}

export interface LugarUbicacion extends Coordenadas{
    address: string;
    staticMapImageUrl: string;
}