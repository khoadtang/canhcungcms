import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { ValidationForm } from '../../base/validation-form';

@Component({
  selector: 'canhcung-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends ValidationForm {
  constructor(private http: Http){
    super();
  }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    super.ngOnInit();
  }

  onSubmit(){
    this.http.get("https://httpbin.org/get").subscribe((res)=>{
      console.log(res);
    })
  }
}
