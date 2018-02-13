import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app-root/app-root.component';
import { HomeComponent } from './components/app-home/app-home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Home/Main', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
