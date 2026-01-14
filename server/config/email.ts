import nodemailer from 'nodemailer';

interface ContactEmailData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

// Crear transporter con las credenciales de email
const createTransporter = () => {
  // Opción 1: SMTP genérico (funciona con Gmail, Outlook, DonWeb, etc.)
  if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  // Opción 2: Gmail (más simple para desarrollo)
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }

  // Si no hay credenciales, crear un transporter de prueba (solo para desarrollo)
  console.warn('⚠️  No se han configurado credenciales de email. Usando modo de prueba.');
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'test@ethereal.email',
      pass: 'test'
    }
  });
};

// Función para enviar email de contacto
export const sendContactEmail = async (data: ContactEmailData): Promise<void> => {
  const transporter = createTransporter();
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'forxtech11@gmail.com';

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.GMAIL_USER || 'noreply@forxtech.com',
    to: recipientEmail,
    subject: `Nuevo mensaje de contacto de ${data.nombre}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.mensaje.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Este mensaje fue enviado desde el formulario de contacto de ForXTech</em></p>
    `,
    text: `
Nuevo mensaje de contacto

Nombre: ${data.nombre}
Email: ${data.email}
Teléfono: ${data.telefono}

Mensaje:
${data.mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de ForXTech
    `.trim()
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado correctamente a:', recipientEmail);
  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    // En desarrollo, si falla el envío, solo logueamos el error
    // pero no lanzamos excepción para que el formulario responda correctamente
    if (process.env.NODE_ENV === 'production') {
      throw error;
    } else {
      console.log('📧 (Modo desarrollo) Datos del email que se habría enviado:', {
        to: recipientEmail,
        subject: mailOptions.subject,
        from: mailOptions.from
      });
    }
  }
};
