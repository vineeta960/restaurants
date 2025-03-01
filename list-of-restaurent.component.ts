import { Component, OnInit } from '@angular/core';
import{RestoService}from '../resto.service'
@Component({
  selector: 'app-list-of-restaurent',
  templateUrl: './list-of-restaurent.component.html',
  styleUrls: ['./list-of-restaurent.component.css']
})
export class ListOfRestaurentComponent  implements OnInit{

  constructor(private resto:RestoService){}
  collection:any=[];
  ngOnInit(): void {
      this.resto.getList().subscribe((result)=>{
        console.warn(result);
        this.collection=result;

      });
  }
  deleteResto(item:any)
  {
     console.warn(this.collection);
     this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn(result);

    }

    )
  }
}
