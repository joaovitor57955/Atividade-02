import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./pages/user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'user-enter',
    loadChildren: () => import('./pages/user-enter/user-enter.module').then( m => m.UserEnterPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'produtosform',
    loadChildren: () => import('./pages/produto-form/produtosform.module').then( m => m.ProdutosformPageModule)
  },
  {
    path: 'produtosenter',
    loadChildren: () => import('./pages/produto-enter/produtosenter.module').then( m => m.ProdutosenterPageModule)
  },
  {
    path: 'produtoslist',
    loadChildren: () => import('./pages/produto-list/produtoslist.module').then( m => m.ProdutoslistPageModule)
  },
  {
    path: 'produtosform',
    loadChildren: () => import('./pages/produtosform/produtosform.module').then( m => m.ProdutosformPageModule)
  },
  {
    path: 'produto-form',
    loadChildren: () => import('./pages/produto-form/produto-form.module').then( m => m.ProdutoFormPageModule)
  },
  {
    path: 'produto-enter',
    loadChildren: () => import('./pages/produto-enter/produto-enter.module').then( m => m.ProdutoEnterPageModule)
  },
  {
    path: 'produto-list',
    loadChildren: () => import('./pages/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
