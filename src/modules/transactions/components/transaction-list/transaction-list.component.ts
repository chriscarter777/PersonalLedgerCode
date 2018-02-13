import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Category, Transaction } from '../../../shared/interfaces'; 

@Component({
    selector: 'transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})

export class TransactionListComponent {
    accounts: Account[];
    categories: Category[];
    transactions: Transaction[];

    constructor(private dataService: DataService) {

      this.dataService.transactionAdded.subscribe(
        (data: Transaction) => {
          console.log("transactionAdded received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem adding.");
          }
          else {
            this.transactions.push(data);
          }
        },
        error => alert("There was a problem adding.")
      );

      this.dataService.transactionDeleted.subscribe(
        (data: Transaction) => {
          console.log("transactionDeleted received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem deleting.");
          }
          else {
            var indextToDelete = this.transactions.findIndex((element) => element.id === data.id);
            this.transactions.splice(indextToDelete, 1);
          }
        },
        error => alert("There was a problem deleting.")
      );

      this.dataService.transactionUpdated.subscribe(
        (data: Transaction) => {
          console.log("transactionUpdated received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem updating.");
          }
          else {
            var indexToUpdate = this.transactions.findIndex((element) => element.id == data.id);
            this.transactions[indexToUpdate] = data;
          }
        },
        error => alert("There was a problem updating.")
      );
    }  //ctor

    ngOnInit() {
        this.getAccounts();
        this.getCategories();
        this.getTransactions();
    }

    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    getAccounts(): void {
        this.dataService.getAccounts().subscribe(
            accounts => this.accounts = accounts,
            error => alert("there was an error getting accounts.")
        );
    }

    getCategories(): void {
        this.dataService.getCategories().subscribe(
            categories => this.categories = categories,
            error => alert("there was an error getting categories.")
        );
    }

    getTransactions(): void {
        this.dataService.getTransactions().subscribe(
            transactions => this.transactions = transactions,
            error => alert("there was an error getting transactions.")
        );
    }

    onDelete(id: number): void {
      var result: Transaction;
      var indextToDelete = this.transactions.findIndex((element) => element.id === id);
      var dateToDelete = this.transactions[indextToDelete].date;
      var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
      if (confirmation) { this.dataService.deleteAccount(id); };
    }
}
