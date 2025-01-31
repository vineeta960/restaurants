import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RestoService {
url="http://localhost:3000/restaurent";
rootUrl="http://localhost:3000/";
constructor(private http:HttpClient) { }

  //Get all restaurant
  getList():Observable<any[]>
  {
     return this.http.get<any[]>(this.url);
  }

  // Save a new restaurant
  saveResto(data: any) : Observable<any> {

    return this.http.post(this.url,data);

  }

  // Delete a restaurant by ID
   deleteResto(id:any): Observable<any>
   {
    return this.http.delete(`${this.url}/${id}`);
   };

   // Get a restaurant by ID
   getCurrentResto(id:any): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  //update a restaurant by id
  updateResto(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
  //registerd usre in restuarent
  registerUser(data:any)
  {
    return this.http.post(this.rootUrl+"users",data)
  }
}

