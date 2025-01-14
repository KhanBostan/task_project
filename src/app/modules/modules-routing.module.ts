import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '', 
    redirectTo: 'user', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: 'user' 
  }, 
];


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ModulesRoutingModule { }
