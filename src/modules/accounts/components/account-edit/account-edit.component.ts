import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Account } from '../../../shared/interfaces';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent {
  form: FormGroup;
  editAccount: Account;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.createForm();
  }


  createForm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getAccount(id).subscribe(
      account => {
        this.editAccount = account;
        this.instantiateForm();
      },
      error => alert("there was an error getting account.")
    );
  }

  displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

  displayAsPercent = (value: number) => value.toFixed(2) + "%";

  instantiateForm() {
    this.form = new FormGroup({
      acctType: new FormControl(this.editAccount.acctType),
      institution: new FormControl(this.editAccount.institution),
      interest: new FormControl(this.editAccount.interest),
      limit: new FormControl(this.editAccount.limit),
      name: new FormControl(this.editAccount.name),
      number: new FormControl(this.editAccount.number),
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.editAccount.acctType = this.form.get('acctType').value;
    this.editAccount.institution = this.form.get('institution').value;
    this.editAccount.interest = this.form.get('interest').value;
    this.editAccount.limit = this.form.get('limit').value;
    this.editAccount.name = this.form.get('name').value;
    this.editAccount.number = this.form.get('number').value;
    this.dataService.updateAccount(this.editAccount);
    //reset
    this.goBack();
  }
}  //class
