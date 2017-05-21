import { Component, OnInit } from '@angular/core';
import { ElementRef,Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';

const ERROR_MESSAGE = {
  required: 'required'
}

export class ValidationForm implements OnInit{
  public myForm: FormGroup;
  protected _formBuilder: FormBuilder = new FormBuilder();
  public showMessage : true;

  constructor() {

  }

  ngOnInit() {
    this.validateWhenHasChangeForm();
    this.addErrorMessageBlock();
  }

  validateWhenHasChangeForm(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      var control = this.myForm.controls[nameControl];
      control.valueChanges.subscribe(() => {
        this.checkInvalidControl(nameControl, control);
      });
    });
  }

  checkInvalidControl(nameControl, control){
    var errors = control.errors;
    if (!errors) {
      this.hideErrorsMessage(nameControl);
    } else {
      this.showErrorsMessage(nameControl, errors);
    }
  }

  showErrorsMessage(nameControl: string, errors){
    Object.keys(errors).forEach(error => {
      $("#error-" + nameControl).removeClass("hide");
      $("#error-" + nameControl).text(nameControl + " is " + ERROR_MESSAGE[error]);
    });
  }

  addErrorMessageBlock(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      $("input[name=" + nameControl + "]")[0].insertAdjacentHTML("afterend", "<small class='hide control-label has-error' id=error-" + nameControl + "></small>");
    });
  }

  hideErrorsMessage(nameControl: string){
    $("#error-" + nameControl).addClass("hide");
  }
}
