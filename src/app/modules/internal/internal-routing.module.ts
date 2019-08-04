import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './components/internal/internal.component';
import { InternalhomeComponent } from './components/internalhome/internalhome.component';
import { InternalGuard } from 'src/app/core/guards/internal.guard';
import { InternalViewApplicationsComponent } from './components/internal-view-applications/internal-view-applications.component';
import { InternalViewProfileComponent } from './components/internal-view-profile/internal-view-profile.component';
import { InternalViewUsersComponent } from './components/internal-view-users/internal-view-users.component';
import { InternalViewApplicationComponent } from './components/internal-view-application/internal-view-application.component';
import { InternalCreateAccountComponent } from './components/internal-create-account/internal-create-account.component';

const routes: Routes = [
  {
    path: 'i',
    component: InternalComponent,
    children: [
      {
        path: '',
        component: InternalhomeComponent,
        canActivate: [InternalGuard]
      },
      {
        path: 'profile/:id',
        component: InternalViewProfileComponent,
        canActivate: [InternalGuard]
      },
      {
        path: 'applications',
        component: InternalViewApplicationsComponent,
        canActivate: [InternalGuard]
      },
      {
        path: 'agents',
        component: InternalViewUsersComponent,
        canActivate: [InternalGuard]
      },
      {
        path: 'application/:id',
        component: InternalViewApplicationComponent,
        canActivate: [InternalGuard]
      },
      {
        path: 'create-account',
        component: InternalCreateAccountComponent,
        canActivate: [InternalGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
