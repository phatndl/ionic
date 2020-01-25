import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
        canLoad: [AuthGuard]
      },
      // {
      //   path: 'page-one',
      //   loadChildren: () => import('./home/page-one/page-one.module').then( m => m.PageOnePageModule)
      // },
      // {
      //   path: 'page-two',
      //   loadChildren: () => import('./home/page-two/page-two.module').then( m => m.PageTwoPageModule)
      // },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
