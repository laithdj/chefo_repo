import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)},
  { path: 'video-player/:id', loadChildren: () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule)},
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)},
  { path: 'results/:category', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/app.module').then(m => m.AppModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
