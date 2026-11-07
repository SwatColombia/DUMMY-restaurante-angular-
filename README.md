<<<<<<< HEAD
Documento o configuración base: README.md
=======
# 🍽️ Smart Restaurant Management & POS System

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)

Un sistema integral de grado empresarial diseñado para modernizar la operación de restaurantes. Esta plataforma desacoplada cuenta con un Frontend robusto y escalable enfocado en la velocidad del Punto de Venta (POS), gestión de comandas en tiempo real, rastreo de domicilios por GPS y un Back-Office administrativo seguro.

---

## 👨‍💻 Sobre el Desarrollador

**Hola, soy Andres Betancur** 🚀  
*Desarrollador Frontend | Bucaramanga, Colombia*

Especializado en la creación de interfaces de usuario inmersivas, escalables y de alto rendimiento. Mi enfoque combina una arquitectura de código limpia con un diseño centrado en el usuario, garantizando que aplicaciones complejas (como sistemas ERP o POS) se sientan intuitivas y respondan en milisegundos. Para este proyecto, he diseñado una arquitectura basada en **Domain-Driven Design (DDD)** utilizando las mejores prácticas de Angular.

📫 **Conecta conmigo:** https://www.linkedin.com/in/felix-andres-betancur-9389ab1a5/ | 🌐 **Portafolio:** https://lnkd.in/emekedfv

---

## 🏗️ Arquitectura del Frontend (Angular)

Para garantizar que este software pueda escalar a múltiples sucursales sin convertirse en código espagueti, el frontend está estructurado utilizando el patrón de **Módulos con Carga Diferida (Lazy Loading)** y una estricta separación de responsabilidades.

Aquí te explico cómo está organizado el corazón de la aplicación en la carpeta `src/app/`:

```text
frontend/src/app/
├── core/                # 🛡️ El cerebro de la aplicación (Seguridad y Datos)
│   ├── guards/          # Protección de rutas. Ej: auth.guard.ts bloquea vistas a usuarios sin login.
│   ├── interceptors/    # jwt.interceptor.ts inyecta el token de seguridad en cada petición a la API.
│   └── services/        # Lógica global (Autenticación, WebSockets para el KDS).
│
├── shared/              # 🧩 Componentes UI Reutilizables (El "Lego" del proyecto)
│   └── components/      # Botones, modales y tablas de datos construidas con Tailwind CSS.
│
├── features/            # 🚀 Módulos de Negocio (Lazy Loaded)
│   ├── admin/           # Back-Office: Dashboards, inventario, finanzas (solo gerentes).
│   ├── pos/             # Punto de Venta: Cajas, mesas, facturación (alta velocidad).
│   └── delivery/        # Módulo de Domicilios.
│       └── map/         # Integración de Leaflet para rastreo de repartidores en tiempo real.
│
├── app-routing.module.ts # Enrutador principal.
└── app.component.ts      # Componente raíz.
>>>>>>> 74eed98 (Revise contact details in README)
