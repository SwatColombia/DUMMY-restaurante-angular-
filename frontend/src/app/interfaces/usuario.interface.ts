// usuario.model.ts
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    rol: 'admin' | 'cliente' | 'mesero';
    activo: boolean;
    creadoEn: Date;
  }