import { AccountsModule } from '../accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from '../categories/categories.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsModule } from '../reports/reports.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { UsersModule } from '../users/users.module';

import { DataService } from '../shared/data.service'

import { AppComponent } from './components/app-root/app-root.component';
import { HomeComponent } from './components/app-home/app-home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,

        AccountsModule,
        CategoriesModule,
        ReportsModule,
        TransactionsModule,
        UsersModule,

        AppRoutingModule,
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent,
        PageNotFoundComponent
    ],

    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        DataService
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

