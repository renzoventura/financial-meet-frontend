import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './components/agent/agent.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AgenthomeComponent } from './components/agenthome/agenthome.component';
import { AgentViewProfileComponent } from './components/agent-view-profile/agent-view-profile.component';
import { AgentViewApplicationsComponent } from './components/agent-view-applications/agent-view-applications.component';


@NgModule({
  declarations: [
    AgentComponent, 
    AgenthomeComponent, 
    AgentViewProfileComponent, 
    AgentViewApplicationsComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ]
})
export class AgentModule { }
