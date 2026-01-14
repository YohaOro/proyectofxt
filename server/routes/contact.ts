import express, { Request, Response } from 'express';
import { sendContactEmail } from '../config/email.js';

const router = express.Router();

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

// Endpoint para recibir el formulario de contacto
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nombre, email, telefono, mensaje }: ContactFormData = req.body;

    // Validación básica
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
    console.error('Error al procesar el formulario:', error);
    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intenta más tarde.'
    });
  }
});

export default router;
