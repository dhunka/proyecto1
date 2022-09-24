import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tipousuario',
    loadChildren: () => import('./tipousuario/tipousuario.module').then( m => m.TipousuarioPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'docentelist',
    loadChildren: () => import('./docentelist/docentelist.module').then( m => m.DocentelistPageModule)
  },
  {
    path: 'loginalumno',
    loadChildren: () => import('./loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
