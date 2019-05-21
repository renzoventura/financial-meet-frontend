import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from '../user/components/userhome/userhome.component';
import { CreateApplicationComponent } from '../user/components/create-application/create-application.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserhomeComponent,
    CreateApplicationComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ]
})
export class UserModule { }
