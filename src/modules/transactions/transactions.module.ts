import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../shared/data.service'

import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TransactionAddComponent,
        TransactionEditComponent,
        TransactionListComponent
    ],
    providers: [DataService]
})
export class TransactionsModule { }
