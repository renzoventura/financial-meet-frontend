import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from '../user/components/userhome/userhome.component';
import { CreateApplicationComponent } from '../user/components/create-application/create-application.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { ViewApplicationsComponent } from '../user/components/view-applications/view-applications.component';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    UserhomeComponent,
    CreateApplicationComponent,
    UserComponent,
    ViewApplicationsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
