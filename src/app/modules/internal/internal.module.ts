import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalhomeComponent } from './components/internalhome/internalhome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InternalComponent } from './components/internal/internal.component';
import { SharedModule } from '../shared/shared.module';
import { InternalViewApplicationsComponent } from './components/internal-view-applications/internal-view-applications.component';
import { InternalViewProfileComponent } from './components/internal-view-profile/internal-view-profile.component';

@NgModule({
  declarations: [
    InternalhomeComponent,
    InternalComponent,
    InternalViewApplicationsComponent,
    InternalViewProfileComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class InternalModule { }
