"use server";

import { CONTACT_EMAIL } from "@/lib/config";

export interface ContactFormState {
    success: boolean;
    message?: string;
    errors?: {
        [key: string]: string[];
    };
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    // Artificial delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Basic validation
    const errors: { [key: string]: string[] } = {};
    if (!name) errors.name = ["A név megadása kötelező."];
    if (!phone) errors.phone = ["A telefonszám megadása kötelező."];
    if (!subject) errors.subject = ["Kérjük válasszon témát."];

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    // Simulate email sending
    console.log("------------------------------------------------");
    console.log(`Sending email to: ${CONTACT_EMAIL}`);
    console.log(`From: ${name} (${email || "No email provided"})`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------------------");

    // Here you would integrate with an email service provider like Resend, SendGrid, or Nodemailer
    // example: await resend.emails.send({ to: CONTACT_EMAIL, ... })

    return { success: true, message: "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot." };
}
