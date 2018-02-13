import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './components/user-list/user-list.component';

import { DataService } from '../shared/data.service'

import { UserRoutingModule } from './users.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserListComponent
    ],
    providers: [DataService]
})
export class UsersModule { }
