import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
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
      var editlinks = document.getElementsByClassName("editlink");
      for (var i = 0; i < editlinks.length; i++) {
          editlinks[i].setAttribute("disabled", "true");
      };
      document.getElementById("addlink").setAttribute("disabled", "true");

      this.newCategory = this.freshNewCategory();
    this.form = new FormGroup({
      name: new FormControl(this.newCategory.name),
      tax: new FormControl(this.newCategory.tax),
      type: new FormControl(this.newCategory.type),
    });
  }

  ngOnDestroy() {
      var editlinks = document.getElementsByClassName("editlink");
      for (var i = 0; i < editlinks.length; i++) {
          editlinks[i].removeAttribute("disabled");
      };
      document.getElementById("addlink").removeAttribute("disabled");
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
