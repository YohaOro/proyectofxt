import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting: máximo 5 solicitudes por IP cada 15 minutos para el formulario
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 solicitudes por IP
  message: {
    success: false,
    message: 'Demasiadas solicitudes desde esta IP, por favor intenta más tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting para endpoint de salud (10 solicitudes por minuto)
const healthLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 10, // máximo 10 solicitudes por IP por minuto
  message: {
    success: false,
    message: 'Demasiadas solicitudes desde esta IP, por favor intenta más tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Configuración de CORS - permitir solo orígenes específicos
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGINS?.split(',') || ['https://yohaoro.github.io']
    : ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middlewares
app.use(cors(corsOptions));

// Límite de tamaño para prevenir DoS (100KB para JSON, 1MB para urlencoded)
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Headers de seguridad adicionales
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
});

// Rutas
app.use('/api/contact', contactLimiter, contactRoutes);

// Ruta de salud (con rate limiting)
app.get('/api/health', healthLimiter, (_req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

// Middleware de manejo de errores global (debe ir al final, antes de iniciar el servidor)
app.use((err: Error, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Si la respuesta ya fue enviada, delegar al manejador de errores por defecto de Express
  if (res.headersSent) {
    return next(err);
  }

  // Log del error (detallado solo en desarrollo)
  if (process.env.NODE_ENV === 'development') {
    console.error('Error no manejado:', err);
  } else {
    console.error('Error no manejado:', err.message);
  }

  // Respuesta genérica al cliente (no exponer detalles)
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor. Por favor intenta más tarde.'
  });
});

// Middleware para rutas no encontradas (404)
app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
