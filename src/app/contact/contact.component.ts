import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.formData.privacy) {
      return; // Verhindert das Absenden wenn Datenschutz nicht akzeptiert wurde
    }

    this.http.post('assets/php/send_mail.php', this.formData)
      .subscribe({
        next: (response) => {
          console.log('Message sent successfully');
          // Formular zurücksetzen
          this.formData = {
            name: '',
            email: '',
            message: '',
            privacy: false
          };
        },
        error: (error) => {
          console.error('Error sending message:', error);
        }
      });
  }
}
