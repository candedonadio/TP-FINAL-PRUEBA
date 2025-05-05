import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// —————— Configuración de Nodemailer ——————
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificamos al inicio, no dentro del POST
console.log('   Transporter creado, probando conexión…');
transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Error en conexión SMTP:', err);
  } else {
    console.log('✅ Conexión SMTP correcta');
  }
});

// —————— Ruta POST única ——————
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Todos los campos son obligatorios.' });
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje: ${subject}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        Mensaje: ${message}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });
    console.log('Mensaje enviado, id:', info.messageId);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('❌ Error enviando correo:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el correo' });
  }
});

export default router;
