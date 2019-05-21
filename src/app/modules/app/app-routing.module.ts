import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalhomeComponent } from '../internal/components/internalhome/internalhome.component';
import { InternalGuard } from '../../core/guards/internal.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'internal',
    component: InternalhomeComponent,
    canActivate: [InternalGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
