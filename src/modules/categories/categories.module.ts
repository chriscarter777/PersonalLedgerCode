import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';

import { DataService } from '../shared/data.service'

import { CategoryRoutingModule } from './categories.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CategoryRoutingModule
    ],
    declarations: [
        CategoryAddComponent,
        CategoryEditComponent,
        CategoryListComponent
    ],
    providers: [DataService]
})
export class CategoriesModule { }
