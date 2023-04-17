import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
formdata = new FormGroup({

firstname:new FormControl("old"),
lastname:new FormControl(),
email:new FormControl(),
password:new FormControl()

})
data:datav[]=[{}as datav]

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.formdata.value);
  let v= this.formdata.value
  if((typeof v.firstname == 'string')&&(typeof v.lastname == 'string')&&(typeof v.email == 'string')&&(typeof v.password == 'string')) this.data.push(
    
    {
      firstname:v.firstname,
      lastname:v.lastname,
      email:v.email,
      password:v.password,

    }
    
    
    )
}


change(){
  let newd = {
    firstname:"datachange",
lastname:"lastname changes",
email:"changed@gmail.com",
password:"123sdfrc"
  }
  this.formdata.patchValue(newd)
}
}

export interface datav{
  firstname:string,
lastname:string,
email:string,
password:string
}