import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactFormGroup!: FormGroup;
  templateParams!:any;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.contactFormGroup = this.fb.group({
      firstName: this.fb.control(""),
      lastName: this.fb.control(""),
      subject: this.fb.control(""),
      email: this.fb.control(""),
      message: this.fb.control(""),
    })
  }

  sendEmail(e: Event) {
    this.templateParams = {
      from_name: this.contactFormGroup.value.firstName,
      from_email: this.contactFormGroup.value.email,
      to_name: this.contactFormGroup.value.lastName,
      subject: this.contactFormGroup.value.subject,
      message: this.contactFormGroup.value.message
    };
    emailjs.send('service_taxhhwp', 'template_47aafjg', this.templateParams, "GP_r02lDCYQS2h2D6")
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
