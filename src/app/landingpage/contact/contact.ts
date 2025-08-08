import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  onSubmit() {
    console.log(this.contactData);
  }
}
