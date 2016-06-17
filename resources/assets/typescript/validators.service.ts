import {Injectable} from '@angular/core';
import {ControlGroup, Control, Validators} from '@angular/common';


@Injectable()
export class ValidatorService {

  constructor(){
  }

  cannotContainSpace(control: Control){
    if(control.value.indexOf(' ')>=0){
      return {cannotContainChars:true};
    } else {
      return null;
    }
  }

  cannotContainSpecialChars(control: Control){
    if(control.value.indexOf('/')>=0){
      return {cannotContainChars:true};
    } else if(control.value.indexOf('-')>=0){
      return {cannotContainChars:true};
    } else if(control.value.indexOf('(')>=0){
      return {cannotContainChars:true};
    } else if(control.value.indexOf(')')>=0){
      return {cannotContainChars:true};
    } else {
      return null;
    }
  }

  phoneLength(control: Control){
    if(control.value.length >= 11){
      return {phoneLength:true};
    } else if(control.value.length <= 9 ){
      return {phoneLength:true};
    } else {
      return null;
    }
  }



}
