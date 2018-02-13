import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Account } from '../../../shared/interfaces';

@Component({
    selector: 'account-add',
    templateUrl: './account-add.component.html',
    styleUrls: ['./account-add.component.css']
})

export class AccountAddComponent {
    newAccount: Account;
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private location: Location
    ) { }

    ngOnInit() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        };
        document.getElementById("addlink").setAttribute("disabled", "true");

        this.newAccount = this.freshNewAccount();
        this.form = new FormGroup({
            acctType: new FormControl(this.newAccount.acctType),
            institution: new FormControl(this.newAccount.institution),
            interest: new FormControl(this.newAccount.interest),
            limit: new FormControl(this.newAccount.limit),
            name: new FormControl(this.newAccount.name),
            number: new FormControl(this.newAccount.number),
        });
    }

    ngOnDestroy() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        };
        document.getElementById("addlink").removeAttribute("disabled");
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    displayAsPercent = (value: number) => value.toFixed(2) + "%";

    freshNewAccount() {
        return { id: null, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true }
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.newAccount.acctType = this.form.get('acctType').value;
        this.newAccount.institution = this.form.get('institution').value;
        this.newAccount.interest = this.form.get('interest').value;
        this.newAccount.limit = this.form.get('limit').value;
        this.newAccount.name = this.form.get('name').value;
        this.newAccount.number = this.form.get('number').value;
        this.dataService.addAccount(this.newAccount);
        //reset
        this.ngOnInit();
        this.goBack();
    }
}  //class
