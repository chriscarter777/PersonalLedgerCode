import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Account, Category, Transaction } from '../../../shared/interfaces';

@Component({
    selector: 'transaction-edit',
    templateUrl: './transaction-edit.component.html',
    styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent {
    accounts: Account[];
    categories: Category[];
    editTransaction: Transaction;
    form: FormGroup;


    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        };
        document.getElementById("addlink").setAttribute("disabled", "true");

        this.getAccounts();
        this.getCategories();

        const id = +this.route.snapshot.paramMap.get('id');

        Promise.all([this.getAccounts(), this.getCategories(), this.getTransaction(id)])
            .then(() => this.defineForm());
    }

    ngOnDestroy() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        };
        document.getElementById("addlink").removeAttribute("disabled");
    }

    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    defineForm() {
        this.form = new FormGroup({
            amount: new FormControl(this.editTransaction.amount),
            category: new FormControl(this.editTransaction.category),
            crAcct: new FormControl(this.editTransaction.crAcct),
            date: new FormControl(this.editTransaction.date),
            drAcct: new FormControl(this.editTransaction.drAcct),
            tax: new FormControl(this.editTransaction.tax),
        });
    }

    getAccounts() {
        return new Promise(resolve => {
            this.dataService.getAccounts().subscribe(
                accounts => {
                    this.accounts = accounts;
                    resolve(accounts);
                },
                error => {
                    alert("there was an error getting accounts.");
                }
            )
        })
    }

    getCategories() {
        return new Promise(resolve => {
            this.dataService.getCategories().subscribe(
                categories => {
                    this.categories = categories;
                    resolve(categories);
                },
                error => {
                    alert("there was an error getting categories.");
                }
            )
        })
    }

    getTransaction(id) {
        return new Promise(resolve => {
            this.dataService.getTransaction(id).subscribe(
                transaction => {
                    this.editTransaction = transaction;
                    resolve(transaction);
                },
                error => {
                    alert("there was an error getting transaction.");
                }
            )
        })
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.form.get('category').value;
        this.editTransaction.crAcct = this.form.get('crAcct').value;
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.drAcct = this.form.get('drAcct').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset
        this.goBack();
    }
}
