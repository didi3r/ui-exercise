import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailListComponent } from './containers/email-list/email-list.component';

const routes: Routes = [
  {
    path: 'inbox/:tag',
    component: EmailListComponent,
  },
  {
    path: '',
    redirectTo: '/inbox/all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
