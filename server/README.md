# Backend - ForXTech API

Backend API para el formulario de contacto de ForXTech.

## 🚀 Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Tipado estático
- **Nodemailer** - Envío de emails
- **dotenv** - Variables de entorno

## 📦 Instalación

1. Instala las dependencias (desde la raíz del proyecto):
```bash
npm install
```

## ⚙️ Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Edita el archivo `.env` con tus credenciales:

### Opción 1: SMTP Genérico (DonWeb, Outlook, etc.)

```env
PORT=3001
SMTP_HOST=smtp.tu-servidor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@dominio.com
SMTP_PASSWORD=tu-contraseña
SMTP_FROM=noreply@tudominio.com
RECIPIENT_EMAIL=forxtech11@gmail.com
```

### Opción 2: Gmail

1. Activa la verificación en dos pasos en tu cuenta de Google
2. Genera una "Contraseña de aplicación" en: https://myaccount.google.com/apppasswords
3. Usa esa contraseña en `.env`:

```env
PORT=3001
GMAIL_USER=tu-email@gmail.com
GMAIL_APP_PASSWORD=tu-app-password
RECIPIENT_EMAIL=forxtech11@gmail.com
```

## 🚀 Desarrollo

Para iniciar el servidor en modo desarrollo (con recarga automática):

```bash
npm run server
```

El servidor estará disponible en `http://localhost:3001`

## 📡 Endpoints

### POST `/api/contact`

Recibe los datos del formulario de contacto y envía un email.

**Body (JSON):**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "telefono": "+54 11 12345678",
  "mensaje": "Hola, me interesa..."
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "¡Mensaje enviado correctamente! Te contactaremos pronto."
}
```

**Respuesta de error:**
```json
{
  "success": false,
  "message": "Error al enviar el mensaje..."
}
```

### GET `/api/health`

Endpoint de salud del servidor.

**Respuesta:**
```json
{
  "status": "ok",
  "message": "Servidor funcionando correctamente"
}
```

## 🔒 Seguridad

- Las credenciales de email están en variables de entorno (no se suben a Git)
- El archivo `.env` está en `.gitignore`
- CORS está habilitado (ajusta según necesites en producción)

## 🌐 Despliegue

Para desplegar el backend en tu servidor de DonWeb:

1. Sube los archivos del proyecto
2. Configura las variables de entorno en el servidor
3. Instala las dependencias: `npm install --production`
4. Compila TypeScript: `tsc` (o usa ts-node/tsx en producción)
5. Inicia el servidor: `node dist/index.js` (o usa PM2 para mantenerlo corriendo)

### Con PM2 (recomendado para producción)

```bash
npm install -g pm2
pm2 start dist/index.js --name forxtech-api
pm2 save
pm2 startup
```
