import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-list',
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css']
})

export class CategoryListComponent {
    categories: Category[];

    constructor(private dataService: DataService) {

      this.dataService.categoryAdded.subscribe(
        (data: Category) => {
          console.log("categoryAdded received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem adding.");
          }
          else {
            this.categories.push(data);
          }
        },
        error => alert("There was a problem adding.")
      );

      this.dataService.categoryDeleted.subscribe(
        (data: Category) => {
          console.log("categoryDeleted received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem deleting.");
          }
          else {
            var indextToDelete = this.categories.findIndex((element) => element.id === data.id);
            this.categories.splice(indextToDelete, 1);
          }
        },
        error => alert("There was a problem deleting.")
      );

      this.dataService.categoryUpdated.subscribe(
        (data: Category) => {
          console.log("categoryUpdated received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem updating.");
          }
          else {
            var indexToUpdate = this.categories.findIndex((element) => element.id == data.id);
            this.categories[indexToUpdate] = data;
          }
        },
        error => alert("There was a problem updating.")
      );
    }  //ctor

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.dataService.getCategories().subscribe(
          categories => this.categories = categories,
          error => alert("there was an error getting categories.")
        );
    }

    onDelete(id: number): void {
      var result: Category;
      var indextToDelete = this.categories.findIndex((element) => element.id === id);
      var nameToDelete = this.categories[indextToDelete].name;
      var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
      if (confirmation) { this.dataService.deleteCategory(id); };
    }
}
