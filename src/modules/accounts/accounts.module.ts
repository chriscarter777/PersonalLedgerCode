import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../shared/data.service'

import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AccountAddComponent,
        AccountEditComponent,
        AccountListComponent
    ],
    providers: [DataService]
})
export class AccountsModule { }
