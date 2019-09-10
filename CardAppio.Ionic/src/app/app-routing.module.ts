import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'busca', loadChildren: './busca/busca.module#BuscaPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'reserva', loadChildren: './reserva/reserva.module#ReservaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'restaurantes', loadChildren: './restaurantes/restaurantes.module#RestaurantesPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
