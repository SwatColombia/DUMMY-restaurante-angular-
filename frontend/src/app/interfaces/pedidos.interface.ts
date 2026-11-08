// pedido.model.ts
export interface PedidoItem {
    alimentoId: number;
    nombre: string;
    cantidad: number;
    precioUnitario: number;
  }
  
  export interface Pedido {
    id: number;
    usuarioId: number;
    meseroId?: number;
    items: PedidoItem[];
    total: number;
    estado: 'pendiente' | 'en_preparacion' | 'listo' | 'entregado' | 'cancelado';
    mesa?: string;
    creadoEn: Date;
    actualizadoEn: Date;
  }