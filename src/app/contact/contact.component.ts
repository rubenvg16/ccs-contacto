import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService, ContactFormData } from '../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  currentYear = new Date().getFullYear();

  businessInfo = {
    name: 'CCS y Asociados',
    contact: 'Cristina Castillo Solano',
    email: 'cristina@ccsyasociados.com',
    phone: '606 54 04 01',
    fax: '606 54 04 01',
    address: 'Av. Condes de San Isidro, 9, 1ª planta, oficina 10',
    city: '29640 Fuengirola, Málaga',
    coordinates: { lat: 36.5385, lng: -4.6250 }
  };

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\d\s\-\+\(\)]{9,}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    const formData: ContactFormData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message
    };

    const success = await this.emailService.sendContactEmail(formData);

    this.isSubmitting = false;

    if (success) {
      this.submitSuccess = true;
      this.contactForm.reset();
    } else {
      this.submitError = true;
    }
  }

  getErrorMessage(field: string): string {
    const control = this.f[field];
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Este campo es obligatorio';
      }
      if (control.errors['email']) {
        return 'Introduce un correo electrónico válido';
      }
      if (control.errors['minlength']) {
        return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
      }
      if (control.errors['pattern']) {
        return 'Introduce un número de teléfono válido';
      }
    }
    return '';
  }

  openGoogleMaps() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${this.businessInfo.coordinates.lat},${this.businessInfo.coordinates.lng}`;
    window.open(url, '_blank');
  }
}