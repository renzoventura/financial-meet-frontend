import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from '../user/components/userhome/userhome.component';
import { CreateApplicationComponent } from '../user/components/create-application/create-application.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { ViewApplicationsComponent } from '../user/components/view-applications/view-applications.component';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    UserhomeComponent,
    CreateApplicationComponent,
    UserComponent,
    ViewApplicationsComponent,
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
    MatSortModule
  ]
})
export class UserModule { }
