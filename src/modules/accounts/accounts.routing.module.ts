import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';

const accountsRoutes: Routes = [
    {
        path: 'accounts',
        component: AccountListComponent,
        children: [
            {
                path: 'account-add', component: AccountAddComponent
            },
            { path: 'account-edit/:id', component: AccountEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(accountsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
