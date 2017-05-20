import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidationForm } from '../../base/validation-form';

@Component({
  selector: 'canhcung-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends ValidationForm {
  ngOnInit() {
    this.myForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    super.ngOnInit();
  }
}
