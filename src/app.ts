// Interfaz para los datos del formulario
interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

// Función principal de inicialización
export function initApp(): void {
  renderApp();
  // Configurar eventos después de que el DOM esté renderizado
  setupSmoothScroll();
  setupContactForm();
  setupHeaderScroll();
  setupScrollAnimations();
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
            <a href="#sobre-nosotros">Nosotros</a>
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
      <div class="hero-background"></div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="servicios">
      <div class="container">
        <h2 class="section-title">Nuestros <span class="gradient-text">Servicios</span></h2>
        <div class="servicios-grid">
          <div class="servicio-card">
            <div class="servicio-icon">📱</div>
            <h3>Aplicaciones Personalizadas</h3>
            <p>Desarrollamos aplicaciones móviles y web a medida, adaptadas a las necesidades específicas de tu empresa.</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">🌐</div>
            <h3>Landing Pages</h3>
            <p>Creamos landing pages modernas y optimizadas que convierten visitantes en clientes.</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">💬</div>
            <h3>Sistemas de Chat</h3>
            <p>Implementamos soluciones de chat y comunicación para mejorar la atención al cliente.</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">⚙️</div>
            <h3>Automatización</h3>
            <p>Automatizamos procesos y mejoramos la gestión de tu PYME con soluciones inteligentes.</p>
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

    <!-- Contacto Section -->
    <section id="contacto" class="contacto">
      <div class="container">
        <h2 class="section-title">Comienza tu <span class="gradient-text">Transformación</span></h2>
        <p class="contact-subtitle">Estamos listos para ayudarte a llevar tu empresa al siguiente nivel</p>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <p>contacto@forxtech.com</p>
            </div>
            <div class="contact-item">
              <div class="contact-icon">💼</div>
              <h3>Servicios</h3>
              <p>Soluciones personalizadas</p>
            </div>
          </div>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Tu email" required>
            </div>
            <div class="form-group">
              <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto" rows="5" required></textarea>
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
          <div class="footer-logo">
            <span class="logo-text">ForX<span class="logo-accent">Tech</span></span>
          </div>
          <p class="footer-text">Soluciones tecnológicas a medida para tu empresa</p>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 ForXTech. Todos los derechos reservados.</p>
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

// Manejar el envío del formulario
function handleFormSubmit(form: HTMLFormElement): void {
  const formData = new FormData(form);
  const data: ContactFormData = {
    nombre: formData.get('nombre') as string,
    email: formData.get('email') as string,
    mensaje: formData.get('mensaje') as string
  };

  // Aquí puedes agregar la lógica para enviar el formulario
  // Por ejemplo, usando un servicio como Formspree, EmailJS, o tu backend
  console.log('Formulario enviado:', data);

  // Mensaje de confirmación
  alert('¡Gracias por tu mensaje! Te contactaremos pronto.');

  // Limpiar el formulario
  form.reset();
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
    const elements = document.querySelectorAll('.servicio-card, .sobre-text, .contact-item');
    elements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }, 100);
}
