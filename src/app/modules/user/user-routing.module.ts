import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from '../user/components/userhome/userhome.component';
import { CreateApplicationComponent } from '../user/components/create-application/create-application.component';
import { UserGuard } from '../../core/guards/user.guard';
import { UserComponent } from './components/user/user.component';
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';

const routes: Routes = [
  {
    path: 'u',
    component: UserComponent,
    children: [
        {
            path: '',
            component: UserhomeComponent,
            canActivate: [UserGuard]
        }, 
        {
          path: 'applications',
          component: ViewApplicationsComponent,
          canActivate: [UserGuard]
        },  
        {
          path: 'create',
          component: CreateApplicationComponent,
          canActivate: [UserGuard]
        },    
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
