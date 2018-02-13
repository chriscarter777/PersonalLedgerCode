import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../shared/data.service'

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CategoryAddComponent,
        CategoryEditComponent,
        CategoryListComponent
    ],
    providers: [DataService]
})
export class CategoriesModule { }
