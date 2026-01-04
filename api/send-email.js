import { Resend } from 'resend';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Configuration serveur manquante',
        details: 'La clé API Resend n\'est pas configurée'
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Format email invalide' });
    }

    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const contactEmail = process.env.CONTACT_EMAIL || 'safaeettalhi1@gmail.com';
    
    const recipientEmail = contactEmail;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `Nouveau message de contact - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0ea5e9; margin-bottom: 20px;">Nouveau message de contact</h2>
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Nom:</strong>
              <p style="color: #666; margin: 5px 0;">${safeName}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Email:</strong>
              <p style="color: #666; margin: 5px 0;">${safeEmail}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Message:</strong>
              <p style="color: #666; margin: 5px 0; white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px;">Ce message a été envoyé depuis votre portfolio.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error.message || 'Erreur inconnue'
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès',
      id: data?.id 
    });

  } catch (error) {
    console.error('Unexpected error in send-email API:', error);
    return res.status(500).json({ 
      error: 'Erreur serveur',
      details: error.message || 'Erreur inconnue'
    });
  }
}

