import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private baseUrl=;
  constructor(private http:HttpClient) { }
  createCategory(savedCategory:Category):Observable<Category>
  {
    return this.http.post<Category>('http://localhost:8083/api/v1/category',savedCategory);
  }
}
