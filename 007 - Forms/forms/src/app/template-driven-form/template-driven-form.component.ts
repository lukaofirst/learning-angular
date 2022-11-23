import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  options = ['yes', 'no'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    option: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   option: 'no',
    // });

    this.signupForm.form.patchValue({ userData: { username: suggestedName } });
  }

  //   onSubmit(form: NgForm) {
  //     console.log(form);
  //   }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.option = this.signupForm.value.option;

    this.signupForm.reset();
  }
}
