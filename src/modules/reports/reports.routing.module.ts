import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportListComponent } from './components/report-list/report-list.component';

const reportsRoutes: Routes = [
    {
        path: 'reports',
        component: ReportListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reportsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReportRoutingModule { }
