import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)},
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)},
  { path: 'results/:name/:category', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)},

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
