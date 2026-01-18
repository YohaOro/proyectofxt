# 🚀 Guía de Despliegue del Backend - Render.com

Esta guía te ayudará a desplegar el backend de ForXTech en **Render.com** (gratis y fácil).

## 📌 ¿Qué plan de DonWeb tienes?

**Importante:** Si solo tienes **"Registro de dominio"** en DonWeb (no hosting ni VPS), necesitas desplegar el backend en otro servicio como Render.

**Cómo verificar:**
1. En DonWeb, ve a "Mis Servicios" → Revisa si tienes "Hosting" o "VPS"
2. Si solo ves "Dominios" → Necesitas Render (gratis)
3. Si tienes VPS → Puedes instalar Node.js ahí

**Recomendación:** Usar Render (gratis) incluso si tienes VPS, es más fácil de mantener.

## 📋 Pasos para desplegar en Render.com

### 1. Crear cuenta en Render.com

1. Ve a [render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub (recomendado)

### 2. Crear nuevo servicio Web

1. En el dashboard de Render, haz clic en **"New +"** → **"Web Service"**
2. Conecta tu repositorio de GitHub (`YohaOro/proyectofxt`)
3. Render detectará automáticamente el proyecto

### 3. Configurar el servicio

**Configuración básica:**
- **Name:** `forxtech-api` (o el nombre que prefieras)
- **Region:** `Oregon (US West)` (o el más cercano a ti)
- **Branch:** `main`
- **Root Directory:** Dejar vacío (está en la raíz)
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### 4. Configurar Variables de Entorno

En la sección **"Environment Variables"**, agrega:

```env
NODE_ENV=production
PORT=10000
GMAIL_USER=forxtech11@gmail.com
GMAIL_APP_PASSWORD=tu-app-password-aqui
RECIPIENT_EMAIL=forxtech11@gmail.com
ALLOWED_ORIGINS=https://yohaoro.github.io
```

**Importante:** 
- `GMAIL_APP_PASSWORD`: Usa la contraseña de aplicación de Gmail (no la contraseña normal)
- Para obtenerla: https://myaccount.google.com/apppasswords

### 5. Desplegar

1. Haz clic en **"Create Web Service"**
2. Render comenzará a construir y desplegar tu backend
3. Espera 2-3 minutos hasta que esté listo
4. Render te dará una URL como: `https://forxtech-api.onrender.com`

### 6. (Opcional) Configurar subdominio en DonWeb

Si quieres usar tu dominio de DonWeb para el backend (ej: `api.forxtech.store`):

1. En DonWeb, ve a **"Dominios"** → Haz clic en **"Gestionar >"** en el dominio que quieras usar
2. Busca la sección **"DNS"** o **"Zona DNS"** o **"Gestión DNS"**
3. Agrega un nuevo registro **CNAME**:
   - **Nombre/Host:** `api`
   - **Valor/Destino:** `tu-backend.onrender.com` (la URL que Render te dio, ej: `forxtech-api.onrender.com`)
   - **TTL:** 3600 (o el valor por defecto)
4. Guarda los cambios y espera 5-15 minutos para que se propague

**Resultado:** `https://api.forxtech.store` apuntará a tu backend en Render

### 7. Actualizar el frontend con la URL del backend

**Opción A:** Usar la URL de Render directamente
```typescript
const API_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3001/api'
    : 'https://forxtech-api.onrender.com/api'; // Tu URL de Render
```

**Opción B:** Usar tu subdominio de DonWeb (si configuraste el CNAME en el paso 6)
```typescript
const API_URL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3001/api'
    : 'https://api.forxtech.store/api'; // Tu subdominio de DonWeb
```

**Opción C:** Configurar `VITE_API_URL` en GitHub Actions (ver siguiente sección)

## 🔧 Alternativa: Configurar VITE_API_URL en GitHub Actions

Si prefieres no hardcodear la URL, puedes configurarla como variable de entorno secreta en GitHub:

1. Ve a tu repositorio en GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Agrega un nuevo secret: `VITE_API_URL` con valor `https://tu-backend.onrender.com/api`
4. Actualiza `.github/workflows/deploy.yml` para usar esta variable

## ✅ Verificar que funciona

1. Ve a la URL de Render y agrega `/api/health`
   Ejemplo: `https://forxtech-api.onrender.com/api/health`
2. Deberías ver: `{"status":"ok","message":"Servidor funcionando correctamente"}`
3. Prueba el formulario en GitHub Pages

## 📝 Notas importantes

- **Plan gratuito de Render:** El servicio se "duerme" después de 15 minutos de inactividad. La primera petición después puede tardar ~30 segundos en despertar.
- **Upgrade opcional:** Si necesitas que esté siempre activo, Render tiene planes desde $7/mes
- **Alternativas gratuitas:** Railway.app, Fly.io también ofrecen planes gratuitos similares

## 🆘 Troubleshooting

**Error: "Build failed"**
- Verifica que `npm install` funciona localmente
- Revisa los logs en Render para ver el error específico

**CORS error en producción**
- Verifica que `ALLOWED_ORIGINS` incluye tu dominio de GitHub Pages
- Formato: `https://yohaoro.github.io` (sin barra final)

**Email no se envía**
- Verifica que `GMAIL_APP_PASSWORD` es correcta (no la contraseña normal)
- Asegúrate de que la verificación en 2 pasos está activada en Google
