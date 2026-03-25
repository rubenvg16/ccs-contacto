import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Estos valores los obtendrás de tu cuenta de EmailJS
  // Regístrate gratis en https://www.emailjs.com/
  private readonly SERVICE_ID = 'Css_y_asociados';
  private readonly TEMPLATE_ID = 'template_kw1sj7x';
  private readonly PUBLIC_KEY = 'AS5T2XyZ0VfSiELsW';

  async sendContactEmail(data: ContactFormData): Promise<boolean> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'No proporcionado',
        message: data.message,
        to_email: 'cristina@ccsyasociados.com'
      };

      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
