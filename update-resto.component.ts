import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{ActivatedRoute} from '@angular/router'
import{RestoService} from '../resto.service'
import { waitForAsync } from '@angular/core/testing';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit{
   alert:boolean=false
  editResto=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address:new FormControl('')
  })
  constructor( private router:ActivatedRoute,private resto:RestoService){}
  ngOnInit(): void {
      // console.warn(this.router.snapshot.id);
      this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result:any)=>{
        // console.warn(resutl);
         this.editResto=new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address:new FormControl(result['address'])
        });

      });


  }
  collection()
  {
    console.warn("item",this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result:any)=>{
      console.warn("result",result);
      this.alert=true
    })

  }

   closeAlert()
   {
    this.alert=false
   }
}

