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
  setupFAQ();
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
      <div class="hero-background"></div>
    </section>

    <!-- Estadísticas Section -->
    <section class="estadisticas">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Proyectos Completados</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">35+</div>
            <div class="stat-label">Clientes Satisfechos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Años de Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
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
          <div class="portfolio-card">
            <div class="portfolio-icon">🛒</div>
            <h3>Sistema de Gestión E-commerce</h3>
            <p>Plataforma completa de comercio electrónico con panel de administración, gestión de inventario y sistema de pagos integrado.</p>
            <div class="portfolio-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-icon">📊</div>
            <h3>Dashboard Analítico</h3>
            <p>Aplicación web para visualización de datos empresariales con gráficos interactivos y reportes en tiempo real.</p>
            <div class="portfolio-tech">
              <span>Vue.js</span>
              <span>Python</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-icon">💼</div>
            <h3>Sistema CRM Personalizado</h3>
            <p>Gestor de relaciones con clientes diseñado específicamente para el sector inmobiliario con funcionalidades avanzadas.</p>
            <div class="portfolio-tech">
              <span>Angular</span>
              <span>.NET</span>
              <span>SQL Server</span>
            </div>
          </div>
          <div class="portfolio-card">
            <div class="portfolio-icon">📱</div>
            <h3>App Móvil de Delivery</h3>
            <p>Aplicación móvil nativa para iOS y Android con geolocalización, seguimiento en tiempo real y sistema de notificaciones push.</p>
            <div class="portfolio-tech">
              <span>React Native</span>
              <span>Firebase</span>
              <span>API REST</span>
            </div>
          </div>
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
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <p>forxtech11@gmail.com</p>
            </a>
            <a href="tel:+541131423688" class="contact-item contact-link">
              <div class="contact-icon">📱</div>
              <h3>Teléfono</h3>
              <p>+54 11 31423688</p>
            </a>
            <a href="https://wa.me/541131423688" target="_blank" rel="noopener noreferrer" class="contact-item contact-link">
              <div class="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>+54 11 31423688</p>
            </a>
            <a href="https://www.google.com/maps/search/Vicente+Lopez,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer" class="contact-item contact-link">
              <div class="contact-icon">📍</div>
              <h3>Ubicación</h3>
              <p>Vicente López, Buenos Aires, Argentina</p>
            </a>
          </div>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Tu email" required>
            </div>
            <div class="form-group">
              <input type="tel" id="telefono" name="telefono" placeholder="Tu teléfono (opcional)">
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
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-text">ForX<span class="logo-accent">Tech</span></span>
            </div>
            <p class="footer-text">Soluciones tecnológicas a medida para tu empresa</p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="LinkedIn">🔗 LinkedIn</a>
              <a href="https://instagram.com/forxtechar" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">📷 Instagram</a>
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
              <li>📧 forxtech11@gmail.com</li>
              <li>📱 +54 11 31423688</li>
              <li><a href="https://wa.me/541131423688" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">💬 +54 11 31423688</a></li>
              <li><a href="https://www.google.com/maps/search/Vicente+Lopez,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">📍 Vicente López, Buenos Aires, Argentina</a></li>
            </ul>
          </div>
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
