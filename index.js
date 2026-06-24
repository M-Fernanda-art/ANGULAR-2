// VISTAS PROTEGIDAS

// Las vistas protegidas son páginas de la aplicación a las que solo puede entrar un usuario que haya iniciado sesión.

// Por ejemplo, una aplicación con estas rutas:

// /login
// /registro
// /dashboard
// /perfil
// /configuracion

// Las rutas publicas serían:

// /login
// /registro

// Cualquier persona puede entrar.

// Las rutas protegidas serían:

// /dashboard
// /perfil
// /configuracion

// Solo pueden entrar usuarios identificados.

// Si no hay protección, alguien puede escribir directamente en el navegador:

// http://localhost:4200/dashboard

// y entraría aunque nunca haya iniciado sesión.

// Si se crea protección, Angular verifica si el usuario esta autenticado.

// Si NO ha iniciao sesión:

// /dashboard
//       ↓
// Acceso denegado
//       ↓
// Redirección a /login

// Si SÍ ha iniciado sesión:

// /dashboard
//       ↓
// Acceso permitido

// Para que Angular sepa si el usuario inició sesión, una forma sencilla es guardar un dato en localStorage.

// Cuando el login es exitoso:

// localStorage.setItem('logueado', 'true');

// Cuando cierra sesión:

// localStorage.removeItem('logueado');



// GUARD

// Un Guard es un archivo especial que revisa si el usuario puede entrar a una ruta.

// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = () => {

//   const logueado = localStorage.getItem('logueado');

//   return logueado === 'true';

// };

// Aplicandolo a las rutas, en app.routes.ts:

// {
//   path: 'dashboard',
//   component: DashboardComponent,
//   canActivate: [authGuard]
// }

// Cuando alguien intenta entrar:

// /dashboard

// Angular ejecuta:

// authGuard

// Si devuelve:

// true

// entra

// si devuelve:

// false

// no entra


