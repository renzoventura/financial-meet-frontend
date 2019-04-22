import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { AgenthomeComponent } from './components/agent/agenthome/agenthome.component';
import { InternalhomeComponent } from './components/internal/internalhome/internalhome.component';
import { UserGuard } from '../core/guards/user.guard';
import { InternalGuard } from '../core/guards/internal.guard';
import { AgentGuard } from '../core/guards/agent.guard';
import { CreateApplicationComponent } from './components/user/create-application/create-application.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserhomeComponent,
    canActivate: [UserGuard]
  },
  { //change to Children for user later
    path: 'user/create-application',
    component: CreateApplicationComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'agent',
    component: AgenthomeComponent,
    canActivate: [AgentGuard]
    
  },
  {
    path: 'internal',
    component: InternalhomeComponent,
    canActivate: [InternalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
