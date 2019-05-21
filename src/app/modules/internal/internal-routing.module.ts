import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './components/internal/internal.component';
import { InternalhomeComponent } from './components/internalhome/internalhome.component';
import { InternalGuard } from 'src/app/core/guards/internal.guard';

const routes: Routes = [
  {
    path: 'i',
    component: InternalComponent,
    children: [
        {
            path: '',
            component: InternalhomeComponent,
            canActivate: [InternalGuard]
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
