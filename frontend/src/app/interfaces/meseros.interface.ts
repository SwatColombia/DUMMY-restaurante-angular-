// mesero.model.ts
export interface Mesero {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
    turno?: string;
    creadoEn: Date;
  }