import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
savedcategory= new Category();
category:Category={
  categoryName:'',
  categoryDescription:''
};
onClick (cat:Category)
{
   this.savedcategory.categoryName=cat.categoryName; 
   this.savedcategory.categoryDescription=cat.categoryDescription;  
   this.cate.createCategory(this.savedcategory).subscribe(data=>console.log(data));
}

constructor(private cate:CategoryService) { 
 }

  ngOnInit() {
  }

} 
