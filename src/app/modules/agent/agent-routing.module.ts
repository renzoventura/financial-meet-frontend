import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './components/agent/agent.component';
import { AgenthomeComponent } from './components/agenthome/agenthome.component';
import { AgentGuard } from 'src/app/core/guards/agent.guard';

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
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
