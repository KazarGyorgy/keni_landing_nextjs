"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact";
import { HiArrowRight } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { isValidPhoneNumber } from "libphonenumber-js";

function SubmitButton() {
  const t = useTranslations("Contact");
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin w-5 h-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {t("form.submitting")}
        </>
      ) : (
        <>
          {t("form.submit")}
          <HiArrowRight className="w-5 h-5" aria-hidden="true" />
        </>
      )}
    </button>
  );
}

export default function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const t = useTranslations("Contact");
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
  });
  const [mountTime] = useState(() => Date.now());
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const validatePhone = (value: string): string | null => {
    if (!value) return "A telefonszám megadása kötelező.";
    const valid = isValidPhoneNumber(value, "HU") || isValidPhoneNumber(value);
    return valid
      ? null
      : "Kérjük érvényes telefonszámot adjon meg (pl.: +36 30 123 4567).";
  };

  useEffect(() => {
    if (state.success) {
      onSuccess();
    }
  }, [state.success, onSuccess]);

  if (state.success) {
    return null;
  }

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="formLoadTime" value={mountTime.toString()} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
            placeholder={t("form.name_placeholder")}
            aria-invalid={state?.errors?.name ? "true" : "false"}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("form.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
              phoneError ? "border-red-500" : "border-white/10"
            } text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors`}
            placeholder={t("form.phone_placeholder")}
            aria-invalid={
              phoneError ? "true" : state?.errors?.phone ? "true" : "false"
            }
            onBlur={(e) => {
              setPhoneTouched(true);
              setPhoneError(validatePhone(e.target.value));
            }}
            onChange={(e) => {
              if (phoneTouched) {
                setPhoneError(validatePhone(e.target.value));
              }
            }}
          />
          {(phoneError || state?.errors?.phone) && (
            <p className="text-red-400 text-xs mt-1">
              {phoneError ?? state?.errors?.phone?.[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t("form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
          placeholder={t("form.email_placeholder")}
          aria-invalid={state?.errors?.email ? "true" : "false"}
        />
      </div>

      <div className="relative">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t("form.subject")}
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors appearance-none pr-10"
            aria-invalid={state?.errors?.subject ? "true" : "false"}
          >
            <option value="" className="bg-primary-900" disabled>
              {t("form.subject_placeholder")}
            </option>
            <option value="mortgage" className="bg-primary-900">
              {t("form.subjects.mortgage")}
            </option>
            <option value="personal_loan" className="bg-primary-900">
              {t("form.subjects.personal_loan")}
            </option>
            <option value="insurance" className="bg-primary-900">
              {t("form.subjects.insurance")}
            </option>
            <option value="other" className="bg-primary-900">
              {t("form.subjects.other")}
            </option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t("form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
          placeholder={t("form.message_placeholder")}
          aria-invalid={state?.errors?.message ? "true" : "false"}
        />
      </div>

      <SubmitButton />

      {state?.message && !state.success && (
        <div
          className="p-4 mb-4 text-sm text-red-400 rounded-lg bg-red-900/20"
          role="alert"
        >
          {state.message}
        </div>
      )}

      {state?.errors && (
        <div className="text-red-400 text-sm mt-2" role="alert">
          {Object.values(state.errors)
            .flat()
            .map((err, i) => (
              <p key={i}>{err}</p>
            ))}
        </div>
      )}
    </form>
  );
}
