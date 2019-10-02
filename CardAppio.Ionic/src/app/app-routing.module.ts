import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs-restaurante', loadChildren: './tabs-restaurante/tabs-restaurante.module#TabsRestaurantePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'restaurante', loadChildren: './restaurante/restaurante.module#RestaurantePageModule' },
  { path: 'esqueci-senha', loadChildren: './esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'fazer-reserva', loadChildren: './fazer-reserva/fazer-reserva.module#FazerReservaPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'pedido', loadChildren: './pedido/pedido.module#PedidoPageModule' },
  { path: 'pagar', loadChildren: './pagar/pagar.module#PagarPageModule' }
];

@NgModule({
  imports: [  
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
