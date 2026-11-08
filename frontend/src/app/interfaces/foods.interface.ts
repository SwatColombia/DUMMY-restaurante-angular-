// SE MANEJA LA INTERFAZ DE LOS ALIMENTOS
// alimento.model.ts
export interface Alimento {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria: string;
    imagen?: string;
    disponible: boolean;
    creadoEn: Date;
}