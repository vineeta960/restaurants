import { Component } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password:new FormControl('')
  });
  ngOnInit(): void {
    // Call collectResto method if necessary on init
  }
  constructor(private resto:RestoService){}
  alert:boolean=false
  collectResto() {
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result:any)=>{
      this.alert=true
      // console.warn(result);
    });
    this.register.reset({})
  }

  closeAlert()
  {
    this.alert=false
  }

}
