import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'modules',
    loadChildren: () =>
      import('./modules/modules.module').then(m => m.ModulesModule),
  },
  { 
    path: '', 
    redirectTo: 'modules/user', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
