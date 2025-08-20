import { Component, OnInit, signal, importProvidersFrom, PLATFORM_ID, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideAnimations()],
  animations: [
    trigger('autoHeight', [
      state('void', style({ height: 0, opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    CarouselModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Voget - Soluciones Tecnológicas');
  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  // Configuración del carrusel de proyectos
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  };

  // Datos de ejemplo para el carrusel de proyectos
  projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Plataforma integral para la gestión de procesos empresariales.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'Aplicación Móvil',
      description: 'Aplicación móvil para gestión de tareas y productividad.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      technologies: ['Ionic', 'React Native', 'Firebase']
    },
    {
      title: 'Plataforma E-commerce',
      description: 'Solución de comercio electrónico con pasarela de pago integrada.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control con visualización de datos en tiempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'D3.js', 'Python']
    }
  ];

  // Datos de ejemplo para el equipo
  team = [
    {
      name: 'Tomas Villegas',
      role: 'CEO & Fundador',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    },
    {
      name: 'Gaelico',
      role: 'Directora de Desarrollo',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    },
    {
      name: 'Victor Yael',
      role: 'Diseñador UX/UI',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    },
    {
      name: 'Etni Hernandez',
      role: 'Desarrolladora Full Stack',
      image: 'https://randomuser.me/api/portraits/women/16.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    },
    {
      name: 'Oswaldo nuñez',
      role: 'Desarrolladora Full Stack',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    }
  ];

  // Datos de ejemplo para servicios
  services = [
    {
      icon: 'code',
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos que se adaptan a cualquier dispositivo.'
    },
    {
      icon: 'phone_android',
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.'
    },
    {
      icon: 'cloud',
      title: 'Servicios en la Nube',
      description: 'Soluciones escalables en la nube para optimizar tu negocio.'
    },
    {
      icon: 'analytics',
      title: 'Análisis de Datos',
      description: 'Transformamos tus datos en información valiosa para la toma de decisiones.'
    },
    {
      icon: 'security',
      title: 'Ciberseguridad',
      description: 'Protege tu negocio con nuestras soluciones de seguridad informática.'
    },
    {
      icon: 'support_agent',
      title: 'Soporte Técnico',
      description: 'Asistencia técnica especializada para resolver cualquier incidencia.'
    }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }

  // Función para manejar el envío del formulario de contacto
  submitContactForm() {
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
  }
}
