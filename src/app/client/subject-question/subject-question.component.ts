import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-subject-question',
  templateUrl: './subject-question.component.html',
  styleUrls: ['./subject-question.component.css']
})
export class SubjectQuestionComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  score= 0;
  constructor(private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  finalScore(){

    
    
  }
}
