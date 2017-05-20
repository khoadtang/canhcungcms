import { Component, OnInit } from '@angular/core';
import { ElementRef,Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';

export class ValidationForm implements OnInit{
  public myForm: FormGroup;
  protected _formBuilder: FormBuilder = new FormBuilder();

  constructor() {

  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(() => {
      this.checkInvalidControl();
    });
  }

  checkInvalidControl(){
    Object.keys(this.myForm.controls).forEach(nameControl => {
      var control = this.myForm.controls[nameControl];
      if(this.hasFocus(control) && this.hasErrors(this.myForm.controls[nameControl])) {
        $("input[name=" + nameControl + "]")[0].insertAdjacentHTML("afterend", "<small>TEST</small>");
      }
    });
  }

  hasErrors(control){
    return control.errors !== undefined && control.errors !== null;
  }

  hasFocus(control){
    return control.touched;
  }

  showErrorsMessage(type: string){
    return "Required";
  }
}
