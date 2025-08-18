import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

    @Input() translations!: any;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false  
  }


  mailTest = false;
  successMessage = ''; 

  post = {
    endPoint: 'https://portfolio.isabel-egli.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

    onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.successMessage = this.translations?.contactSuccess || this.translations.contactMessageSuccessfull; 
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.successMessage = this.translations?.contactError || 'Es gab ein Problem beim Senden ❌';
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.successMessage = this.translations?.contactSuccess || this.translations.contactMessageSuccessfull;
      ngForm.resetForm();
    }
  }
}
