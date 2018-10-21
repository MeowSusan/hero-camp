import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/authentication/login/login.component';
import { SignUpComponent } from './containers/authentication/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
