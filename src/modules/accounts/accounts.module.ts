import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';

import { DataService } from '../shared/data.service'

import { AccountRoutingModule } from './accounts.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountAddComponent,
        AccountEditComponent,
        AccountListComponent
    ],
    providers: [DataService]
})
export class AccountsModule { }
