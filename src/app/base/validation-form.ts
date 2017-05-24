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

  ngOnInit() {
    this.validateControlWhenHasChanged();
    this.addErrorMessageStructure();
  }

  validateControlWhenHasChanged(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      var control = this.myForm.controls[nameControl];
      control.valueChanges.subscribe(() => {
        this.checkInvalidControl(nameControl, control);
      });
    });
  }

  checkInvalidControl(nameControl, control){
    !control.errors ? this.hideErrorsMessage(nameControl) : this.showErrorsMessage(nameControl, control.errors);
  }

  showErrorsMessage(nameControl: string, errors){
    Object.keys(errors).forEach(error => {
      $("#error-" + nameControl).removeClass("hide");
      $("#error-" + nameControl).text(nameControl + " is " + ERROR_MESSAGE[error]);
    });
  }

  addErrorMessageStructure(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      $("input[name=" + nameControl + "]")[0].insertAdjacentHTML("afterend", "<small class='hide control-label has-error' id=error-" + nameControl + "></small>");
    });
  }

  hideErrorsMessage(nameControl: string){
    $("#error-" + nameControl).addClass("hide");
  }
}
