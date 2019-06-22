import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './components/agent/agent.component';
import { AgenthomeComponent } from './components/agenthome/agenthome.component';
import { AgentGuard } from 'src/app/core/guards/agent.guard';
import { AgentViewProfileComponent } from './components/agent-view-profile/agent-view-profile.component';
import { AgentViewApplicationsComponent } from './components/agent-view-applications/agent-view-applications.component';

const routes: Routes = [
  {
    path: 'a',
    component: AgentComponent,
    children: [
      {
          path: '',
          component: AgenthomeComponent,
          canActivate: [AgentGuard]
      }, 
      {
        path: 'applications',
        component: AgentViewApplicationsComponent,
        canActivate: [AgentGuard]
      },
      {
        path: 'profile/:id',
        component: AgentViewProfileComponent,
        canActivate: [AgentGuard]
      } 
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
