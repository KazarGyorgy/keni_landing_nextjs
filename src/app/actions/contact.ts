"use server";

import { CONTACT_EMAIL } from "@/lib/config";
import nodemailer from "nodemailer";
import { getAdminNotificationEmail, getClientConfirmationEmail } from "@/lib/email-templates";
import { getTranslations } from "next-intl/server";

export interface ContactFormState {
    success: boolean;
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
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

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });


        const adminEmail = getAdminNotificationEmail({ name, email, phone, subject, message }, t);
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: adminEmail.subject,
            text: adminEmail.text,
            html: adminEmail.html,
        });


        try {
            const clientEmail = getClientConfirmationEmail({ name, email, phone, subject, message }, t);
            await transporter.sendMail({
                from: `"Kazár Éva - Pénzügyi Tanácsadó" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
                to: email,
                subject: clientEmail.subject,
                text: clientEmail.text,
                html: clientEmail.html,
            });
        } catch (confirmError) {
            console.error("Confirmation email sending failed:", confirmError);
        }

        return { success: true, message: "Köszönjük! Üzenetét sikeresen elküldtük." };
    } catch (error) {
        console.error("Email sending error:", error);
        return {
            success: false,
            message: "Sajnáljuk, hiba történt az üzenet küldésekor. Kérjük próbálja meg később vagy hívjon minket telefonon."
        };
    }
}
