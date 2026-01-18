// Interfaz para los datos del formulario
interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

// Interfaz para los servicios
interface Servicio {
  icon: string;
  title: string;
  description: string;
}

// Interfaz para los proyectos
interface Proyecto {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

// URL del backend API - detectar automáticamente si estamos en producción
// Si tienes un backend en producción, configura VITE_API_URL en el build o agrega la URL aquí
const API_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3001/api'
    : 'https://proyectofxt.onrender.com/api'; // Backend en Render.com

// Datos de servicios
const servicios: Servicio[] = [
  {
    icon: './device-mobile-heart.svg',
    title: 'Aplicaciones Personalizadas',
    description: 'Desarrollamos aplicaciones móviles y web a medida con las últimas tecnologías, adaptadas a las necesidades específicas de tu empresa para maximizar la productividad.'
  },
  {
    icon: './world-check.svg',
    title: 'Landing Pages',
    description: 'Creamos landing pages modernas, optimizadas para SEO y conversión, que transforman visitantes en clientes potenciales y aumentan tus ventas.'
  },
  {
    icon: './message-circle-check.svg',
    title: 'Sistemas de Chat',
    description: 'Implementamos soluciones de chat en tiempo real integradas con tus canales de comunicación para mejorar la atención al cliente y la experiencia del usuario.'
  },
  {
    icon: './automation.svg',
    title: 'Automatización',
    description: 'Automatizamos procesos empresariales repetitivos para optimizar la gestión de tu PYME, reducir errores y liberar tiempo para actividades estratégicas.'
  },
  {
    icon: './packages.svg',
    title: 'Sistemas ERP',
    description: 'Implementamos sistemas ERP personalizados que integran todas las áreas de tu negocio: finanzas, inventario, recursos humanos y ventas en una sola plataforma.'
  },
  {
    icon: './message-dots.svg',
    title: 'Chatbots Inteligentes',
    description: 'Desarrollamos chatbots con inteligencia artificial para atención al cliente 24/7, mejorando la experiencia del usuario y optimizando los recursos de tu empresa.'
  }
];

// Datos de proyectos
const proyectos: Proyecto[] = [
  {
    icon: './shopping-cart-copy.svg',
    title: 'Sistema de Gestión E-commerce',
    description: 'Plataforma completa de comercio electrónico con panel de administración intuitivo, gestión de inventario en tiempo real, sistema de pagos integrado y análisis de ventas avanzado.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    icon: './trending-up.svg',
    title: 'Dashboard Analítico',
    description: 'Aplicación web empresarial para visualización de datos con gráficos interactivos, reportes personalizables en tiempo real y análisis predictivo para toma de decisiones informadas.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL']
  },
  {
    icon: './briefcase.svg',
    title: 'Sistema CRM Personalizado',
    description: 'Gestor de relaciones con clientes diseñado específicamente para el sector inmobiliario con pipeline de ventas, gestión de propiedades y automatización de seguimientos.',
    technologies: ['Angular', '.NET', 'SQL Server']
  },
  {
    icon: './devices.svg',
    title: 'App Móvil de Delivery',
    description: 'Aplicación móvil nativa para iOS y Android con geolocalización en tiempo real, seguimiento de pedidos, sistema de notificaciones push y múltiples métodos de pago integrados.',
    technologies: ['React Native', 'Firebase', 'API REST']
  },
  {
    icon: './packages.svg',
    title: 'Sistema ERP Integrado',
    description: 'Sistema de planificación de recursos empresariales que integra finanzas, inventario, compras y recursos humanos en una plataforma unificada con reportes consolidados y análisis avanzado.',
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    icon: './message-dots.svg',
    title: 'Plataforma con Chatbot IA',
    description: 'Sistema de atención al cliente automatizado con chatbot inteligente basado en IA, integrado con múltiples canales y capacidad de aprendizaje continuo para mejorar las respuestas.',
    technologies: ['Python', 'Node.js', 'OpenAI API']
  }
];

// Función para generar HTML de una card de servicio
function renderServicioCard(servicio: Servicio): string {
  return `
    <div class="servicio-card">
      <div class="servicio-icon"><img src="${servicio.icon}" alt="${servicio.title}"></div>
      <h3>${servicio.title}</h3>
      <p>${servicio.description}</p>
    </div>
  `;
}

// Función para generar HTML de una card de proyecto
function renderProyectoCard(proyecto: Proyecto): string {
  const techTags = proyecto.technologies.map(tech => `<span>${tech}</span>`).join('');
  return `
    <div class="portfolio-card">
      <div class="portfolio-icon"><img src="${proyecto.icon}" alt="${proyecto.title}"></div>
      <h3>${proyecto.title}</h3>
      <p>${proyecto.description}</p>
      <div class="portfolio-tech">
        ${techTags}
      </div>
    </div>
  `;
}

// Función para generar todas las cards de servicios
function renderServiciosGrid(): string {
  return servicios.map(servicio => renderServicioCard(servicio)).join('');
}

// Función para generar todas las cards de proyectos
function renderProyectosGrid(): string {
  return proyectos.map(proyecto => renderProyectoCard(proyecto)).join('');
}

// Función principal de inicialización
export function initApp(): void {
  renderApp();
  // Configurar eventos después de que el DOM esté renderizado
  setupSmoothScroll();
  setupContactForm();
  setupHeaderScroll();
  setupScrollAnimations();
  setupFAQ();
  setupNumberCounter();
}

// Renderizar el contenido de la aplicación
function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <header class="header">
          <div class="logo">
            <span class="logo-text">ForX<span class="logo-accent">Tech</span></span>
          </div>
          <nav class="nav">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Proceso</a>
            <a href="#sobre-nosotros">Nosotros</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>
        
        <div class="hero-content">
          <h1 class="hero-title">
            Soluciones Tecnológicas
            <span class="gradient-text">a Medida</span>
          </h1>
          <p class="hero-subtitle">
            Transformamos tu empresa con aplicaciones personalizadas, landing pages, sistemas de chat y automatización para optimizar la gestión de tu PYME.
          </p>
          <div class="hero-buttons">
            <a href="#contacto" class="btn btn-primary">Contáctanos</a>
            <a href="#servicios" class="btn btn-secondary">Nuestros Servicios</a>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <video class="hero-video" autoplay muted loop playsinline>
          <source src="./video (online-video-cutter.com).mp4" type="video/mp4">
          Tu navegador no soporta videos HTML5.
        </video>
        <div class="hero-overlay"></div>
      </div>
    </section>

    <!-- Estadísticas Section -->
    <section class="estadisticas">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-target="50" data-suffix="+">0+</div>
            <div class="stat-label">Proyectos Completados</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="35" data-suffix="+">0+</div>
            <div class="stat-label">Clientes Satisfechos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="5" data-suffix="+">0+</div>
            <div class="stat-label">Años de Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="98" data-suffix="%">0%</div>
            <div class="stat-label">Tasa de Satisfacción</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="servicios">
      <div class="container">
        <h2 class="section-title">Nuestros <span class="gradient-text">Servicios</span></h2>
        <div class="servicios-grid">
          ${renderServiciosGrid()}
        </div>
      </div>
    </section>

    <!-- Testimonios Section -->
    <section class="testimonios">
      <div class="container">
        <h2 class="section-title">Lo que dicen nuestros <span class="gradient-text">Clientes</span></h2>
        <div class="testimonios-grid">
          <div class="testimonio-card">
            <div class="testimonio-stars">★★★★★</div>
            <p class="testimonio-text">"ForXTech transformó completamente nuestra gestión empresarial. La aplicación que desarrollaron ha aumentado nuestra productividad en un 40%. Excelente servicio y profesionales muy competentes."</p>
            <div class="testimonio-author">
              <div class="testimonio-author-info">
                <strong>María González</strong>
                <span>CEO, TechSolutions S.A.</span>
              </div>
            </div>
          </div>
          <div class="testimonio-card">
            <div class="testimonio-stars">★★★★★</div>
            <p class="testimonio-text">"El equipo de ForXTech entendió perfectamente nuestras necesidades. El sistema de automatización que implementaron nos ha ahorrado horas de trabajo manual cada semana. ¡Altamente recomendado!"</p>
            <div class="testimonio-author">
              <div class="testimonio-author-info">
                <strong>Carlos Mendoza</strong>
                <span>Director, Innovación Retail</span>
              </div>
            </div>
          </div>
          <div class="testimonio-card">
            <div class="testimonio-stars">★★★★★</div>
            <p class="testimonio-text">"Trabajar con ForXTech fue una experiencia excelente. Profesionales, puntuales y con un enfoque claro en resultados. Nuestra nueva landing page ha aumentado las conversiones significativamente."</p>
            <div class="testimonio-author">
              <div class="testimonio-author-info">
                <strong>Ana Rodríguez</strong>
                <span>Fundadora, Digital Marketing Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="proyectos" class="portfolio">
      <div class="container">
        <h2 class="section-title">Nuestros <span class="gradient-text">Proyectos</span></h2>
        <div class="portfolio-grid">
          ${renderProyectosGrid()}
        </div>
      </div>
    </section>

    <!-- Proceso Section -->
    <section id="proceso" class="proceso">
      <div class="container">
        <h2 class="section-title">Nuestro <span class="gradient-text">Proceso</span></h2>
        <div class="proceso-grid">
          <div class="proceso-item">
            <div class="proceso-number">01</div>
            <h3>Consulta</h3>
            <p>Analizamos tus necesidades y objetivos para entender completamente tu proyecto.</p>
          </div>
          <div class="proceso-item">
            <div class="proceso-number">02</div>
            <h3>Diseño</h3>
            <p>Creamos prototipos y diseños personalizados que reflejan tu visión y marca.</p>
          </div>
          <div class="proceso-item">
            <div class="proceso-number">03</div>
            <h3>Desarrollo</h3>
            <p>Construimos tu solución utilizando las mejores tecnologías y prácticas del mercado.</p>
          </div>
          <div class="proceso-item">
            <div class="proceso-number">04</div>
            <h3>Entrega</h3>
            <p>Lanzamos tu proyecto y nos aseguramos de que todo funcione perfectamente.</p>
          </div>
          <div class="proceso-item">
            <div class="proceso-number">05</div>
            <h3>Soporte</h3>
            <p>Brindamos mantenimiento continuo y soporte técnico para garantizar el éxito a largo plazo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologías Section -->
    <section class="tecnologias">
      <div class="container">
        <h2 class="section-title">Tecnologías que <span class="gradient-text">Utilizamos</span></h2>
        <div class="tech-grid">
          <div class="tech-category">
            <h3>Frontend</h3>
            <div class="tech-tags">
              <span>React</span>
              <span>Vue.js</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Backend</h3>
            <div class="tech-tags">
              <span>Node.js</span>
              <span>Python</span>
              <span>.NET</span>
              <span>PHP</span>
              <span>Java</span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Bases de Datos</h3>
            <div class="tech-tags">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Firebase</span>
            </div>
          </div>
          <div class="tech-category">
            <h3>Móvil</h3>
            <div class="tech-tags">
              <span>React Native</span>
              <span>Flutter</span>
              <span>iOS</span>
              <span>Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre Nosotros Section -->
    <section id="sobre-nosotros" class="sobre-nosotros">
      <div class="container">
        <div class="sobre-content">
          <div class="sobre-text">
            <h2 class="section-title">Soluciones <span class="gradient-text">Adaptadas</span> a tu Empresa</h2>
            <p>
              En ForXTech, entendemos que cada empresa es única. Por eso, ofrecemos soluciones tecnológicas personalizadas que se adaptan perfectamente a tus necesidades específicas.
            </p>
            <p>
              Ya sea que necesites una aplicación móvil, una landing page, un sistema de chat o herramientas para automatizar procesos, trabajamos contigo para crear la solución perfecta que impulse el crecimiento de tu PYME.
            </p>
            <ul class="features-list">
              <li>✓ Desarrollo a medida</li>
              <li>✓ Tecnología de vanguardia</li>
              <li>✓ Soporte continuo</li>
              <li>✓ Optimización para PYMES</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
      <div class="container">
        <h2 class="section-title">Preguntas <span class="gradient-text">Frecuentes</span></h2>
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-question">
              <h3>¿Cuánto tiempo toma desarrollar un proyecto?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>El tiempo varía según la complejidad del proyecto. Una landing page puede tomar de 1-2 semanas, mientras que una aplicación completa puede requerir de 2-4 meses. Siempre proporcionamos un cronograma detallado después de la consulta inicial.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>¿Ofrecen mantenimiento después de la entrega?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Sí, ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, mejoras y soporte técnico. Adaptamos el plan según las necesidades de cada cliente.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>¿Trabajan con empresas pequeñas?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Absolutamente. Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Especialmente nos enfocamos en ayudar a PYMES a crecer mediante soluciones tecnológicas accesibles.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>¿Cómo es el proceso de pago?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Normalmente trabajamos con pagos por etapas: un anticipo al inicio del proyecto, pagos parciales según hitos alcanzados, y el pago final al completar la entrega. Esto garantiza transparencia y seguridad para ambas partes.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <h3>¿Puedo ver ejemplos de proyectos anteriores?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Por supuesto. En la sección de Proyectos puedes ver algunos de nuestros trabajos destacados. También podemos compartir casos de estudio más detallados durante la consulta inicial, respetando la confidencialidad de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <section id="contacto" class="contacto">
      <div class="container">
        <h2 class="section-title">Comienza tu <span class="gradient-text">Transformación</span></h2>
        <p class="contact-subtitle">Estamos listos para ayudarte a llevar tu empresa al siguiente nivel</p>
        <div class="contact-content">
          <div class="contact-info">
              <a href="mailto:forxtech11@gmail.com" class="contact-item contact-link">
              <div class="contact-icon"><img src="./mail-fast.svg" alt="Email"></div>
              <h3>Email</h3>
              <p>forxtech11@gmail.com</p>
            </a>
            <a href="https://wa.me/541131423688" target="_blank" rel="noopener noreferrer" class="contact-item contact-link">
              <div class="contact-icon"><img src="./device-mobile-message.svg" alt="WhatsApp"></div>
              <h3>WhatsApp</h3>
              <p>+54 11 31423688</p>
            </a>
            <a href="https://www.google.com/maps/search/Vicente+Lopez,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer" class="contact-item contact-link">
              <div class="contact-icon"><img src="./map-2.svg" alt="Ubicación"></div>
              <h3>Ubicación</h3>
              <p>Vicente López, Buenos Aires, Argentina</p>
            </a>
          </div>
          <form class="contact-form" id="contactForm">
            <div id="form-message" class="form-message" style="display: none;"></div>
            <div class="form-group">
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required maxlength="100">
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Tu email" required maxlength="255">
            </div>
            <div class="form-group">
              <input type="tel" id="telefono" name="telefono" placeholder="Tu teléfono (opcional)" maxlength="20">
            </div>
            <div class="form-group">
              <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto" rows="5" required maxlength="2000"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-text">ForX<span class="logo-accent">Tech</span></span>
            </div>
            <p class="footer-text">Soluciones tecnológicas a medida para tu empresa</p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <img src="./brand-linkedin.svg" alt="LinkedIn"> LinkedIn
              </a>
              <a href="https://instagram.com/forxtechar" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <img src="./brand-instagram.svg" alt="Instagram"> Instagram
              </a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul class="footer-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contacto</h4>
            <ul class="footer-links">
              <li><img src="./mail-fast.svg" alt="Email" class="footer-icon"> forxtech11@gmail.com</li>
              <li><a href="https://wa.me/541131423688" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;"><img src="./device-mobile-message.svg" alt="WhatsApp" class="footer-icon"> +54 11 31423688</a></li>
              <li><a href="https://www.google.com/maps/search/Vicente+Lopez,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;"><img src="./map-2.svg" alt="Ubicación" class="footer-icon"> Vicente López, Buenos Aires, Argentina</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 ForXTech. Todos los derechos reservados. <img src="./antakarana.png" alt="Antakarana" class="antakarana-icon" /></p>
        </div>
      </div>
    </footer>
  `;
}

// Configurar smooth scroll para enlaces de navegación
function setupSmoothScroll(): void {
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (anchor) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  });
}

// Configurar FAQ accordion
function setupFAQ(): void {
  setTimeout(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement as HTMLElement;
        const faqAnswer = faqItem.querySelector('.faq-answer') as HTMLElement;
        const faqIcon = question.querySelector('.faq-icon') as HTMLElement;
        const isActive = faqItem.classList.contains('active');

        // Cerrar todos los demás
        document.querySelectorAll('.faq-item').forEach((item) => {
          item.classList.remove('active');
          const answer = item.querySelector('.faq-answer') as HTMLElement;
          const icon = item.querySelector('.faq-icon') as HTMLElement;
          if (answer && icon) {
            answer.style.maxHeight = '0';
            icon.textContent = '+';
          }
        });

        // Abrir/cerrar el actual
        if (!isActive && faqAnswer && faqIcon) {
          faqItem.classList.add('active');
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
          faqIcon.textContent = '−';
        }
      });
    });
  }, 100);
}

// Configurar el formulario de contacto
function setupContactForm(): void {
  document.addEventListener('submit', (e: Event) => {
    const form = e.target as HTMLFormElement;
    if (form.id === 'contactForm') {
      e.preventDefault();
      handleFormSubmit(form);
    }
  });
}

// Función para mostrar mensajes de formulario (reemplaza alert())
function showFormMessage(message: string, type: 'success' | 'error' = 'success'): void {
  const messageEl = document.getElementById('form-message');
  if (!messageEl) return;

  messageEl.textContent = message;
  messageEl.className = `form-message form-message-${type}`;
  messageEl.style.display = 'block';

  // Auto-ocultar después de 5 segundos
  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 5000);

  // Scroll suave al mensaje
  messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Función para validar datos del formulario en frontend
function validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
  // Validar nombre
  if (!data.nombre || data.nombre.trim().length < 2) {
    return { valid: false, error: 'El nombre debe tener al menos 2 caracteres.' };
  }
  if (data.nombre.length > 100) {
    return { valid: false, error: 'El nombre no puede exceder 100 caracteres.' };
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return { valid: false, error: 'Por favor ingresa un email válido.' };
  }
  if (data.email.length > 255) {
    return { valid: false, error: 'El email no puede exceder 255 caracteres.' };
  }

  // Validar mensaje
  if (!data.mensaje || data.mensaje.trim().length < 10) {
    return { valid: false, error: 'El mensaje debe tener al menos 10 caracteres.' };
  }
  if (data.mensaje.length > 2000) {
    return { valid: false, error: 'El mensaje no puede exceder 2000 caracteres.' };
  }

  // Validar teléfono (opcional)
  if (data.telefono && data.telefono.length > 20) {
    return { valid: false, error: 'El teléfono no puede exceder 20 caracteres.' };
  }

  return { valid: true };
}

// Manejar el envío del formulario
async function handleFormSubmit(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
  
  // Ocultar mensajes anteriores
  const messageEl = document.getElementById('form-message');
  if (messageEl) {
    messageEl.style.display = 'none';
  }
  
  // Deshabilitar botón mientras se envía
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
  }

  const data: ContactFormData = {
    nombre: (formData.get('nombre') as string)?.trim() || '',
    email: (formData.get('email') as string)?.trim() || '',
    telefono: (formData.get('telefono') as string)?.trim() || undefined,
    mensaje: (formData.get('mensaje') as string)?.trim() || ''
  };

  // Validación en frontend antes de enviar
  const validation = validateFormData(data);
  if (!validation.valid) {
    showFormMessage(validation.error || 'Por favor completa todos los campos correctamente.', 'error');
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';
    }
    return;
  }

  // Si no hay backend disponible (producción sin servidor), usar mailto como alternativa
  if (!API_URL) {
    const subject = encodeURIComponent(`Contacto desde ForXTech - ${data.nombre}`);
    const body = encodeURIComponent(`Nombre: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono || 'No proporcionado'}\n\nMensaje:\n${data.mensaje}`);
    window.location.href = `mailto:forxtech11@gmail.com?subject=${subject}&body=${body}`;
    showFormMessage('Redirigiendo a tu cliente de email...', 'success');
    form.reset();
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';
    }
    return;
  }

  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    let result;
    try {
      result = await response.json();
    } catch (e) {
      throw new Error('Respuesta del servidor no válida');
    }

    if (response.ok && result.success) {
      // Mensaje de confirmación
      showFormMessage(result.message || '¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
      // Limpiar el formulario
      form.reset();
    } else {
      // Error del servidor
      showFormMessage(result.message || 'Error al enviar el mensaje. Por favor intenta más tarde.', 'error');
    }
  } catch (error) {
    // No loggear detalles del error en producción
    if (process.env.NODE_ENV === 'development') {
      console.error('Error al enviar el formulario:', error);
    }
    showFormMessage('Error de conexión. Por favor verifica tu conexión a internet e intenta nuevamente.', 'error');
  } finally {
    // Rehabilitar botón
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';
    }
  }
}

// Configurar efecto de scroll para el header
function setupHeaderScroll(): void {
  const header = document.querySelector('.header') as HTMLElement;

  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 14, 39, 0.9)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = 'transparent';
      header.style.backdropFilter = 'none';
    }
  });
}

// Configurar animaciones al hacer scroll
function setupScrollAnimations(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos después de que se renderice el contenido
  setTimeout(() => {
    const elements = document.querySelectorAll('.servicio-card, .sobre-text, .contact-item, .testimonio-card, .portfolio-card, .proceso-item, .stat-item, .faq-item');
    elements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }, 100);
}

// Configurar contador que suma desde 0 hasta el valor final (efecto lotería)
function setupNumberCounter(): void {
  const statsSection = document.querySelector('.estadisticas');
  if (!statsSection) return;

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  // Rastrear qué números están siendo animados actualmente
  const animatingNumbers = new Set<HTMLElement>();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          const statNumbers = document.querySelectorAll('.stat-number[data-target]');
          
          statNumbers.forEach((statEl, index) => {
            const statElement = statEl as HTMLElement;
            
            // Solo animar si no está siendo animado actualmente
            if (!animatingNumbers.has(statElement)) {
              const target = parseInt(statElement.getAttribute('data-target') || '0');
              const suffix = statElement.getAttribute('data-suffix') || '';
              
              // Resetear al inicio
              statElement.textContent = `0${suffix}`;
              
              // Marcar como animando
              animatingNumbers.add(statElement);
              
              // Iniciar contador con delay escalonado
              setTimeout(() => {
                animateNumber(statElement, target, suffix, 2000, () => {
                  // Cuando termine la animación, quitar de la lista
                  animatingNumbers.delete(statElement);
                });
              }, index * 200);
            }
          });
        }, 100);
      } else {
        // Cuando la sección sale de vista, limpiar la lista para permitir reinicio
        const statNumbers = document.querySelectorAll('.stat-number[data-target]');
        statNumbers.forEach((statEl) => {
          const statElement = statEl as HTMLElement;
          animatingNumbers.delete(statElement);
          // Opcionalmente resetear al inicio cuando sale de vista
          const suffix = statElement.getAttribute('data-suffix') || '';
          statElement.textContent = `0${suffix}`;
        });
      }
    });
  }, observerOptions);

  observer.observe(statsSection);
}

// Función para animar el número desde 0 hasta el target
function animateNumber(element: HTMLElement, target: number, suffix: string, duration: number, onComplete?: () => void): void {
  const startTime = Date.now();
  const startValue = 0;
  
  const updateNumber = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing suave
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
    const easedProgress = easeOutCubic(progress);
    
    // Calcular valor actual
    const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
    element.textContent = `${currentValue}${suffix}`;
    
    // Continuar si no ha terminado
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      // Asegurar valor final exacto
      element.textContent = `${target}${suffix}`;
      // Ejecutar callback si existe
      if (onComplete) {
        onComplete();
      }
    }
  };
  
  updateNumber();
}
