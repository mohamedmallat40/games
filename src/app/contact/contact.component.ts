import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  public contactForm: FormGroup | any;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    alert('Contact form submitted')
  }

  get name() {
    return this.contactForm.get('name')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get message() {
    return this.contactForm.get('message')
  }

  ngOnDestroy(): void {
    this.contactForm.reset();
  }

}
