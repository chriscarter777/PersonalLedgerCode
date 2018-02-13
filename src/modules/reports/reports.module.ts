import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportListComponent } from './components/report-list/report-list.component';

import { DataService } from '../shared/data.service'

import { ReportRoutingModule } from './reports.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReportRoutingModule
    ],
    declarations: [
        ReportListComponent
    ],
    providers: [DataService]
})
export class ReportsModule { }
