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
import { InternalViewUsersComponent } from './components/internal-view-users/internal-view-users.component';
import { InternalViewApplicationComponent, DialogOverviewExampleDialog } from './components/internal-view-application/internal-view-application.component';
import { MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { InternalCreateAccountComponent } from './components/internal-create-account/internal-create-account.component';

@NgModule({
  declarations: [
    InternalhomeComponent,
    InternalComponent,
    InternalViewApplicationsComponent,
    InternalViewProfileComponent,
    InternalViewUsersComponent,
    InternalViewApplicationComponent,
    DialogOverviewExampleDialog,
    InternalCreateAccountComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxPaginationModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  entryComponents: [DialogOverviewExampleDialog]
})
export class InternalModule { }
