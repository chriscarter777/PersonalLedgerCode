import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../shared/data.service'

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

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PageNotFoundComponent,

    AccountAddComponent,
    AccountEditComponent,
    AccountListComponent,

    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,

    TransactionAddComponent,
    TransactionEditComponent,
    TransactionListComponent,

    UserListComponent
  ],

  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    DataService
  ],
  //set entry point
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

