import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';

const userRoutes: Routes = [
  { path: 'stepwise-form', component: MultiStepFormComponent },
  { path: '', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
  