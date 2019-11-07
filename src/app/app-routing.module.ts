import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  { path: 'list-usuario', loadChildren: './pages/list-usuario/list-usuario.module#ListUsuarioPageModule' },
  { path: 'perfil-usuario', loadChildren: './pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'add-usuario', loadChildren: './pages/add-usuario/add-usuario.module#AddUsuarioPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
