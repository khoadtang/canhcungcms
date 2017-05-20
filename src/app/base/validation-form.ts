import { Component, OnInit } from '@angular/core';
import { ElementRef,Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';

export class ValidationForm implements OnInit{
  public myForm: FormGroup;
  protected _formBuilder: FormBuilder = new FormBuilder();
  public showMessage : true;

  constructor() {

  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(() => {
      this.checkInvalidControl();
    });
    this.addErrorMessageBlock();
  }

  addErrorMessageBlock(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      $("input[name=" + nameControl + "]")[0].insertAdjacentHTML("afterend", "<small class='hide' id=error-" + nameControl + ">Error Mesasge</small>");
    });
  }

  checkInvalidControl(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      var control = this.myForm.controls[nameControl];
      if (this.hasErrors(this.myForm.controls[nameControl])) {
        $("#error-" + nameControl).removeClass("hide");
      } else {
        $("#error-" + nameControl).addClass("hide");
      }
    });
  }

  hasErrors(control){
    return control.errors !== undefined && control.errors !== null;
  }

  hasFocus(control){
    return control.untouched;
  }

  showErrorsMessage(type: string){
    return "Required";
  }
}
