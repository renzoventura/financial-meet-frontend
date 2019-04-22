import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/home/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { FormsModule } from '@angular/forms';
import { AgenthomeComponent } from './components/agent/agenthome/agenthome.component';
import { InternalhomeComponent } from './components/internal/internalhome/internalhome.component'
import { UserGuard } from '../core/guards/user.guard';
import { AgentGuard } from '../core/guards/agent.guard';
import { InternalGuard } from '../core/guards/internal.guard';
import { TokenInterceptorService } from '../core/interceptors/token-interceptor.service';
import { AuthService } from '../core/services/auth/auth.service';
import { CreateApplicationComponent } from './components/user/create-application/create-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    UserhomeComponent,
    AgenthomeComponent,
    InternalhomeComponent,
    CreateApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,UserGuard, AgentGuard, InternalGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
