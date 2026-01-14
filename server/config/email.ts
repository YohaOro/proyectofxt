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

  throw new Error('No se han configurado las credenciales de email. Por favor revisa las variables de entorno.');
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

  await transporter.sendMail(mailOptions);
};
