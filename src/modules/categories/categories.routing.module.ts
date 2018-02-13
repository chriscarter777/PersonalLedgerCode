import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';

const categoriesRoutes: Routes = [
    {
        path: 'categories',
        component: CategoryListComponent,
        children: [
            { path: 'category-add', component: CategoryAddComponent },
            { path: 'category-edit/:id', component: CategoryEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(categoriesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CategoryRoutingModule { }
