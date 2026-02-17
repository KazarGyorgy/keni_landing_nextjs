export interface EmailData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}


export type Translator = (key: string, values?: any) => string;

export const getAdminNotificationEmail = (data: EmailData, t: Translator) => {
    const { name, email, phone, subject, message } = data;
    return {
        subject: t('Emails.admin.subject', { subject }),
        text: `
${t('Emails.admin.title')}

${t('Emails.admin.fields.name')}: ${name}
${t('Emails.admin.fields.email')}: ${email}
${t('Emails.admin.fields.phone')}: ${phone}
${t('Emails.admin.fields.subject')}: ${subject}

${t('Emails.admin.fields.message')}:
${message}
`.trim(),
        html: `
<h3>${t('Emails.admin.title')}</h3>
<p><strong>${t('Emails.admin.fields.name')}:</strong> ${name}</p>
<p><strong>${t('Emails.admin.fields.email')}:</strong> ${email}</p>
<p><strong>${t('Emails.admin.fields.phone')}:</strong> ${phone}</p>
<p><strong>${t('Emails.admin.fields.subject')}:</strong> ${subject}</p>
<br/>
<p><strong>${t('Emails.admin.fields.message')}:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
`
    };
};

export const getClientConfirmationEmail = (data: EmailData, t: Translator) => {
    const { name, subject } = data;
    return {
        subject: t('Emails.client.subject'),
        text: `
${t('Emails.client.greeting', { name })}

${t('Emails.client.thank_you')}

${t('Emails.client.urgent')}

${t('Emails.client.signature.role')}
${t('Emails.client.signature.name')}
${t('Emails.client.signature.email')}
`.trim(),
        html: `
<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .header { text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; margin-bottom: 20px; }
    .footer { font-size: 12px; color: #888; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
    h2 { color: #1a1a1a; margin-top: 0; }
    .highlight { color: #D4AF37; font-weight: bold; }
    .button { display: inline-block; padding: 10px 20px; background-color: #D4AF37; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>${t('Emails.client.html.header')}</h2>
        </div>
        <p>${t('Emails.client.greeting', { name: `<strong>${name}</strong>` })}</p>
        
        <p>${t('Emails.client.html.confirmation')}</p>
        <p>${t('Emails.client.html.process')}</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px;"><strong>${t('Emails.client.html.your_subject')}</strong> ${subject}</p>
        </div>

        <p>${t('Emails.client.html.urgent_call')}</p>
        <p><a href="tel:+36208522767" class="highlight">+36 20 852 2767</a></p>

        <div class="footer">
            <p><strong>${t('Emails.client.signature.name')}</strong> - ${t('Emails.client.signature.role')}<br>
            <a href="mailto:${t('Emails.client.signature.email')}" style="color: #666;">${t('Emails.client.signature.email')}</a></p>
            <p>${t('Emails.client.html.auto_reply')}</p>
        </div>
    </div>
</body>
</html>
`
    };
};
