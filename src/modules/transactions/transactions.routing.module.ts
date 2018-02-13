import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

const transactionsRoutes: Routes = [
    {
        path: 'transactions',
        component: TransactionListComponent,
        children: [
            { path: 'transaction-add', component: TransactionAddComponent },
            { path: 'transaction-edit/:id', component: TransactionEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(transactionsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TransactionRoutingModule { }
