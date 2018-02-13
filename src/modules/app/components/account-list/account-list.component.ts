import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account } from '../../../shared/interfaces';

@Component({
  selector: 'account-list',
  templateUrl: './accountList.component.html',
  styleUrls: ['./accountList.component.css']
})

export class AccountListComponent {
  accounts: Account[];

  constructor(private dataService: DataService) {

    this.dataService.accountAdded.subscribe(
      (data: Account) => {
        console.log("accountAdded received from data.service: " + JSON.stringify(data));
        if (data === null) {
          alert("There was a problem adding.");
        }
        else {
          this.accounts.push(data);
        }
      },
      error => alert("There was a problem adding.")
    );

    this.dataService.accountDeleted.subscribe(
      (data: Account) => {
        console.log("accountDeleted received from data.service: " + JSON.stringify(data));
        if (data === null) {
          alert("There was a problem deleting.");
        }
        else {
          var indextToDelete = this.accounts.findIndex((element) => element.id === data.id);
          this.accounts.splice(indextToDelete, 1);
        }
      },
      error => alert("There was a problem deleting.")
    );

    this.dataService.accountUpdated.subscribe(
      (data: Account) => {
        console.log("accountUpdated received from data.service: " + JSON.stringify(data));
        if (data === null) {
          alert("There was a problem updating.");
        }
        else {
          var indexToUpdate = this.accounts.findIndex((element) => element.id == data.id);
          this.accounts[indexToUpdate] = data;
        }
      },
      error => alert("There was a problem updating.")
      );
  }  //ctor

ngOnInit() {
  this.getAccounts();
}


displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

displayAsPercent = (value: number) => value.toFixed(2) + "%";

getAccounts(): void {
  this.dataService.getAccounts().subscribe(
    accounts => this.accounts = accounts,
    error => alert("there was an error getting accounts.")
  );
}

onDelete(id: number): void {
  var result: Account;
  var indextToDelete = this.accounts.findIndex((element) => element.id === id);
  var nameToDelete = this.accounts[indextToDelete].name;
  var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
  if(confirmation) { this.dataService.deleteAccount(id); };
}
}  //class
