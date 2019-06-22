import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './components/internal/internal.component';
import { InternalhomeComponent } from './components/internalhome/internalhome.component';
import { InternalGuard } from 'src/app/core/guards/internal.guard';
import { InternalViewApplicationsComponent } from './components/internal-view-applications/internal-view-applications.component';
import { InternalViewProfileComponent } from './components/internal-view-profile/internal-view-profile.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
