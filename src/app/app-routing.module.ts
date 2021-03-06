import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
