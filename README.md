# ForXTech - Landing Page

Landing page moderna y futurista para ForXTech, empresa de soluciones tecnológicas personalizadas.

## 🎨 Características

- Diseño oscuro y futurista
- Paleta de colores: azules oscuros, dorado/amarillo para acentos
- Responsive design (adaptable a móviles y tablets)
- Animaciones suaves
- Formulario de contacto
- Optimizado para SEO
- Desarrollado con **TypeScript** y **Vite**

## 🚀 Tecnologías

- **TypeScript** - Tipado estático
- **Vite** - Build tool moderna y rápida
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS

## 📦 Estructura del Proyecto

```
proyectoFXT/
├── index.html          # Punto de entrada HTML
├── src/
│   ├── main.ts        # Entrada principal de TypeScript
│   ├── app.ts         # Lógica de la aplicación
│   └── style.css      # Estilos globales
├── package.json        # Dependencias y scripts
├── vite.config.ts     # Configuración de Vite
├── tsconfig.json      # Configuración de TypeScript
└── README.md          # Documentación
```

## 🛠️ Instalación

Primero, asegúrate de tener Node.js instalado (versión 18 o superior).

1. Instala las dependencias:
```bash
npm install
```

## 🚀 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 📦 Build para Producción

Para crear la versión de producción optimizada:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

Para previsualizar la build de producción:

```bash
npm run preview
```

## 🔀 Flujo de Trabajo (GitHub Flow)

Este proyecto utiliza **GitHub Flow** como estrategia de desarrollo:

### Ramas

- **`main`**: Rama principal que siempre está en estado de producción estable
- **`feature/*`**: Ramas para nuevas funcionalidades (ej: `feature/mvp`, `feature/nueva-seccion`)

### Proceso de Desarrollo

1. **Crear una rama feature** desde `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nombre-funcionalidad
   ```

2. **Desarrollar y hacer commits** en la rama feature:
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   git push -u origin feature/nombre-funcionalidad
   ```

3. **Crear un Pull Request** en GitHub para revisar los cambios

4. **Mergear a `main`** solo cuando todo esté listo y revisado

5. **Despliegue automático**: Al hacer merge a `main`, el workflow de GitHub Actions despliega automáticamente a GitHub Pages

### Ventajas de GitHub Flow

- ✅ `main` siempre está estable y listo para producción
- ✅ Desarrollo aislado en ramas feature
- ✅ Revisión de código mediante Pull Requests
- ✅ Historial limpio y organizado
- ✅ Despliegue automático desde `main`

## 🌐 Despliegue en GitHub Pages

GitHub Pages es perfecto para proyectos estáticos como este. Tienes dos opciones:

### Opción 1: GitHub Actions (Recomendado)

1. Crea un archivo `.github/workflows/deploy.yml` (ya incluido en el proyecto)
2. El workflow se ejecutará automáticamente al hacer push a la rama `main` o `master`
3. Los archivos se desplegarán automáticamente a GitHub Pages

### Opción 2: Build Manual

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu repositorio
3. Ve a Settings > Pages en tu repositorio de GitHub
4. Selecciona la rama donde está `dist/` y la carpeta `/dist`
5. Guarda los cambios

### Opción 3: Usar la rama `gh-pages`

1. Ejecuta `npm run build`
2. Crea una rama llamada `gh-pages`
3. Copia el contenido de `dist/` a la raíz de la rama `gh-pages`
4. Haz commit y push
5. En Settings > Pages, selecciona la rama `gh-pages`
6. El sitio estará disponible en `https://tuusuario.github.io/nombre-repositorio`

## 🎯 Servicios Destacados

- Aplicaciones Personalizadas
- Landing Pages
- Sistemas de Chat
- Automatización para PYMES

## 📝 Personalización

### Cambiar colores

Los colores están definidos en variables CSS al inicio de `src/style.css`:

```css
:root {
    --dark-bg: #0a0e27;
    --gold: #fbbf24;
    --blue-dark: #0f172a;
    /* ... más variables */
}
```

### Modificar contenido

Edita `src/app.ts` para cambiar los textos, servicios o secciones en la función `renderApp()`.

### Agregar funcionalidad al formulario

Edita `src/app.ts` en la función `handleFormSubmit()` para conectar el formulario de contacto con tu backend o servicio de email (Formspree, EmailJS, etc.).

## 📱 Responsive

La página está optimizada para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Próximos Pasos Sugeridos

- Conectar el formulario de contacto con un servicio de email
- Agregar más secciones (testimonios, portfolio, etc.)
- Integrar Google Analytics
- Optimizar imágenes (si se agregan)
- Agregar meta tags para redes sociales (Open Graph, Twitter Cards)
- Agregar tests unitarios (Vitest)
- Configurar CI/CD

## 📄 Licencia

Este proyecto es privado y pertenece a ForXTech.
