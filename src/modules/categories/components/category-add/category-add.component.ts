import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-add',
    templateUrl: './category-add.component.html',
    styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  form: FormGroup;
  newCategory: Category;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.newCategory = this.freshNewCategory();
    this.form = new FormGroup({
      name: new FormControl(this.newCategory.name),
      tax: new FormControl(this.newCategory.tax),
      type: new FormControl(this.newCategory.type),
    });
  }

  freshNewCategory() {
    return { id: null, name: 'New Category', tax: false, type: 'Expense' }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.newCategory.name = this.form.get('name').value;
    this.newCategory.tax = this.form.get('tax').value;
    this.newCategory.type = this.form.get('type').value;
    this.dataService.addCategory(this.newCategory);
    //reset
    this.ngOnInit();
    this.goBack();
  }
}
