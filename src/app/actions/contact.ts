"use server";

import { CONTACT_EMAIL, CONTACT_EMAIL_CC } from "@/lib/config";
import nodemailer from "nodemailer";
import {
  getAdminNotificationEmail,
  getClientConfirmationEmail,
  EmailData,
} from "@/lib/email-templates";
import { getTranslations } from "next-intl/server";

export interface ContactFormState {
  success: boolean;
  message?: string;
  errors?: {
    [key: string]: string[];
  };
}

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

async function sendAdminEmail(data: EmailData, t: any) {
  const transporter = createTransporter();
  const adminEmail = getAdminNotificationEmail(data, t);

  await transporter.sendMail({
    from: `"PénzINFO Weboldal" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: CONTACT_EMAIL,
    cc: CONTACT_EMAIL_CC,
    replyTo: data.email,
    subject: adminEmail.subject,
    text: adminEmail.text,
    html: adminEmail.html,
  });
}

async function sendClientEmail(data: EmailData, t: any) {
  const transporter = createTransporter();
  const clientEmail = getClientConfirmationEmail(data, t);

  await transporter.sendMail({
    from: `"Kazár Éva - Pénzügyi Tanácsadó" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: data.email,
    subject: clientEmail.subject,
    text: clientEmail.text,
    html: clientEmail.html,
  });
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subjectKey = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const subject = subjectKey ? t(`Contact.form.subjects.${subjectKey}`) : "";

  const errors: { [key: string]: string[] } = {};
  if (!name) errors.name = ["A név megadása kötelező."];
  if (!phone) errors.phone = ["A telefonszám megadása kötelező."];
  if (!subjectKey) errors.subject = ["Kérjük válasszon témát."];
  if (!message) errors.message = ["Az üzenet megadása kötelező."];

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const emailData: EmailData = { name, email, phone, subject, message };

  try {
    await sendAdminEmail(emailData, t);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await sendClientEmail(emailData, t);

    return {
      success: true,
      message: "Köszönjük! Üzenetét sikeresen elküldtük.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message:
        "Hiba történt az üzenet küldésekor. Kérjük próbálja meg később, vagy írjon közvetlenül az info@penzinfo.hu címre.",
    };
  }
}
