import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalhomeComponent } from './components/internalhome/internalhome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InternalComponent } from './components/internal/internal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InternalhomeComponent,
    InternalComponent
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
