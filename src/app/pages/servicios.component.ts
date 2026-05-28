import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  services = [
    {
      title: 'Derecho Civil',
      description: 'Servicios jurídicos en todas las áreas del derecho civil: propiedad, arrendamientos, derechos reales, derecho de familia, sucesiones, contratación civil.',
      icon: 'M3 6l3 1m0 0l-3 9a5 5 0 010 7l7-9a5 5 0 010 7l-3-1m0 0V6'
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Asesoramiento jurídico en la promoción y gestión inmobiliaria, con especial dedicación a negocios relacionados con las inversiones inmobiliarias en España.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'Derecho Urbanístico',
      description: 'Asesoramiento en todo tipo de cuestiones de derecho urbanístico: ordenación, planeamiento, disciplina, ejecución y desarrollo urbanístico.',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
    },
    {
      title: 'Derecho Penal',
      description: 'Asesoramiento, defensa y reclamaciones en el ámbito del Derecho Penal económico y de empresa: fraudes, delitos societarios, medioambientales.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Procedimientos Judiciales',
      description: 'Defensa de los intereses del cliente en procedimientos judiciales civiles ante todas las jurisdicciones e instancias.',
      icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
    },
    {
      title: 'Comercio Electrónico',
      description: 'Asesoramiento de las cuestiones legales derivadas de actividades empresariales a través del comercio electrónico.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Reclamación de Deudas',
      description: 'Servicio de Recobro por proceso monitorio. Comunicación disuasoria, escrito inicial y seguimiento ante el Juzgado.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];
}