import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AppComponent } from './components/app-root/app-root.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { HomeComponent } from './components/app-home/app-home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'accounts',
    component: AccountListComponent,
    children: [
      {
        path: 'account-add', component: AccountAddComponent
      },
      { path: 'account-edit/:id', component: AccountEditComponent }
    ]
  },

  {
    path: 'categories',
    component: CategoryListComponent,
    children: [
      { path: 'category-add', component: CategoryAddComponent },
      { path: 'category-edit/:id', component: CategoryEditComponent }
    ]
  },

  {
    path: 'transactions',
    component: TransactionListComponent,
    children: [
      { path: 'transaction-add', component: TransactionAddComponent },
      { path: 'transaction-edit/:id', component: TransactionEditComponent }
    ]
  },

  { path: 'users', component: UserListComponent },
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
