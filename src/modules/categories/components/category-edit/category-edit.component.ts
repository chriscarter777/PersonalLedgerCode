import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {
  editCategory: Category;
  form: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getCategory(id).subscribe(
      category => {
        this.editCategory = category;
        this.instantiateForm();
      },
      error => alert("there was an error getting category.")
    );
  }

  instantiateForm() {
    this.form = new FormGroup({
      name: new FormControl(this.editCategory.name),
      tax: new FormControl(this.editCategory.tax),
      type: new FormControl(this.editCategory.type),
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.editCategory.name = this.form.get('name').value;
    this.editCategory.tax = this.form.get('tax').value;
    this.editCategory.type = this.form.get('type').value;
    this.dataService.updateCategory(this.editCategory);
    //reset
    this.goBack();
  }
}
