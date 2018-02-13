import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
})

export class ReportListComponent {

    constructor(private dataService: DataService) {
    }  //ctor

    ngOnInit() {
    }
}
