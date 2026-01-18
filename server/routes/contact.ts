import express, { Request, Response } from 'express';
import { sendContactEmail } from '../config/email.js';

const router = express.Router();

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

// Función para sanitizar y validar strings (mejorada: elimina caracteres de control)
function sanitizeString(str: string, maxLength: number = 1000): string {
  return str
    .trim()
    // Eliminar caracteres de control (excepto \n, \r, \t que son válidos)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .slice(0, maxLength);
}

// Endpoint para recibir el formulario de contacto
router.post('/', async (req: Request, res: Response) => {
  try {
    let { nombre, email, telefono, mensaje }: ContactFormData = req.body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Por favor completa todos los campos requeridos'
      });
    }

    // Sanitizar y validar longitud de campos
    nombre = sanitizeString(nombre, 100);
    email = sanitizeString(email, 255);
    mensaje = sanitizeString(mensaje, 2000);
    
    if (telefono) {
      telefono = sanitizeString(telefono, 20);
    }

    // Validar que los campos no estén vacíos después de sanitizar
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Por favor completa todos los campos requeridos'
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Por favor ingresa un email válido'
      });
    }

    // Enviar email
    await sendContactEmail({
      nombre,
      email,
      telefono: telefono || 'No proporcionado',
      mensaje
    });

    res.json({
      success: true,
      message: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
    });
  } catch (error) {
    // Log detallado solo en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.error('Error al procesar el formulario:', error);
    } else {
      console.error('Error al procesar el formulario');
    }
    
    // No exponer detalles del error al cliente
    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intenta más tarde.'
    });
  }
});

export default router;
