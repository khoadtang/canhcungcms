import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {MainComponent} from './pages/main/main.component';
import {AgendasComponent} from './pages/main/agendas/agendas.component';

const appRoutes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'agendas', component: MainComponent,
    children: [
    {path: '', component: AgendasComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
