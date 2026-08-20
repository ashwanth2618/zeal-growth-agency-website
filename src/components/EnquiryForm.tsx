import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Button, Eyebrow } from "./primitives";
import { budgetOptions, industryOptions, serviceOptions, site } from "../lib/site";
import { cn } from "../utils/cn";

type Values = {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  budget: string;
  goal: string;
  message: string;
  consent: boolean;
  services: string[];
};

const EMPTY: Values = {
  name: "",
  business: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  budget: "",
  goal: "",
  message: "",
  consent: false,
  services: [],
};

const GOALS = [
  "Generate more qualified leads",
  "Improve conversions / CRO",
  "Build brand & positioning",
  "Launch a product or project",
  "Scale existing campaigns",
  "Fix measurement & reporting",
  "Automate marketing operations",
  "Something else",
];

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!v.business.trim()) e.business = "Please enter your business name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Enter a valid email address.";
  if (!v.phone.trim()) e.phone = "Please enter a phone number.";
  else if (v.phone.replace(/\D/g, "").length < 8) e.phone = "Enter a valid phone number.";
  if (!v.industry) e.industry = "Select the closest industry.";
  if (!v.budget) e.budget = "Select a budget band — an honest range is fine.";
  if (!v.goal) e.goal = "Select your primary goal.";
  if (v.services.length === 0) e.services = "Select at least one service, or 'Not sure yet'.";
  if (!v.consent) e.consent = "Please accept the privacy policy to continue.";
  return e;
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-mono flex items-baseline justify-between text-ink-500">
        <span>
          {label}
          {required && (
            <span className="ml-1 text-streak-500" aria-hidden="true">
              *
            </span>
          )}
        </span>
        {hint && <span className="text-ink-300 normal-case tracking-normal">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.78rem] text-streak-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function EnquiryForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const liveRef = useRef<HTMLParagraphElement>(null);
  const firstErrorRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((v) => ({ ...v, [k]: val }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onText =
    (k: keyof Values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      set(k, e.target.value as Values[typeof k]);

  const toggleService = (s: string) =>
    setValues((v) => {
      const next = v.services.includes(s)
        ? v.services.filter((x) => x !== s)
        : s === "Not sure yet — advise me"
          ? ["Not sure yet — advise me"]
          : [...v.services.filter((x) => x !== "Not sure yet — advise me"), s];
      return { ...v, services: next };
    });

  const mailtoHref = useMemo(() => {
    const body = [
      `Full name: ${values.name}`,
      `Business: ${values.business}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Website: ${values.website || "—"}`,
      `Industry: ${values.industry}`,
      `Services: ${values.services.join(", ")}`,
      `Monthly marketing budget: ${values.budget}`,
      `Primary goal: ${values.goal}`,
      "",
      "Message:",
      values.message || "—",
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(
      `Growth enquiry — ${values.business || "new prospect"}`,
    )}&body=${encodeURIComponent(body)}`;
  }, [values]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus("idle");
      requestAnimationFrame(() => {
        firstErrorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        liveRef.current?.focus();
      });
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="border border-mist-200 bg-white p-8 md:p-12" role="status">
        <span className="label-mono inline-flex items-center gap-2 border border-volt-500/40 px-2.5 py-1.5 text-volt-600">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3" fill="none">
            <path d="m3 8.5 3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Enquiry received
        </span>
        <h3 className="mt-7 font-display text-[1.6rem] leading-tight tracking-[-0.03em] text-ink-900 md:text-[2rem]">
          Thanks. Your enquiry has been received.
        </h3>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-500">
          Our team will review the details and get back to you. If it is urgent, call{" "}
          <a href={site.phoneHref} className="font-mono text-[0.92rem] text-ink-900 underline underline-offset-4">
            {site.phoneDisplay}
          </a>{" "}
          or send the same details straight to our inbox.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={mailtoHref} variant="primary">
            Send a copy by email <ArrowRight />
          </Button>
          <Button href={site.whatsappHref} external variant="ghost">
            Continue on WhatsApp
          </Button>
        </div>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setStatus("idle");
          }}
          className="label-mono mt-8 text-ink-400 underline decoration-mist-300 underline-offset-4 hover:text-ink-900"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const errCount = Object.values(errors).filter(Boolean).length;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="enquiry-heading"
      className="border border-mist-200 bg-white p-6 md:p-10"
    >
      <div ref={firstErrorRef} />
      <Eyebrow index="11">Enquiry</Eyebrow>
      <h3 id="enquiry-heading" className="mt-5 font-display text-[1.6rem] tracking-[-0.03em] text-ink-900 md:text-[1.9rem]">
        Tell us what you are building.
      </h3>
      <p className="mt-3 max-w-lg text-[0.92rem] leading-relaxed text-ink-400">
        The more specific the inputs, the more useful our first reply. Required fields are marked
        with an asterisk.
      </p>

      <p
        ref={liveRef}
        tabIndex={-1}
        role="alert"
        className={cn(
          "mt-6 border-l-2 border-streak-500 bg-mist-50 px-4 py-3 text-[0.85rem] text-ink-600",
          errCount === 0 && "hidden",
        )}
      >
        {errCount === 1
          ? "One field needs attention before sending."
          : `${errCount} fields need attention before sending.`}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Field id="f-name" label="Full name" required error={errors.name}>
          <input
            id="f-name"
            name="name"
            className="field"
            autoComplete="name"
            value={values.name}
            onChange={onText("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "f-name-error" : undefined}
            placeholder="Priya Raman"
          />
        </Field>

        <Field id="f-business" label="Business name" required error={errors.business}>
          <input
            id="f-business"
            name="business"
            className="field"
            autoComplete="organization"
            value={values.business}
            onChange={onText("business")}
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "f-business-error" : undefined}
            placeholder="Company or brand"
          />
        </Field>

        <Field id="f-email" label="Email" required error={errors.email}>
          <input
            id="f-email"
            name="email"
            type="email"
            className="field"
            autoComplete="email"
            value={values.email}
            onChange={onText("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "f-email-error" : undefined}
            placeholder="you@company.com"
          />
        </Field>

        <Field id="f-phone" label="Phone number" required error={errors.phone}>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            className="field"
            autoComplete="tel"
            value={values.phone}
            onChange={onText("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "f-phone-error" : undefined}
            placeholder="+91 00000 00000"
          />
        </Field>

        <Field id="f-website" label="Website" hint="Optional" error={errors.website}>
          <input
            id="f-website"
            name="website"
            className="field"
            autoComplete="url"
            value={values.website}
            onChange={onText("website")}
            placeholder="company.com"
          />
        </Field>

        <Field id="f-industry" label="Industry" required error={errors.industry}>
          <select
            id="f-industry"
            name="industry"
            className="field"
            value={values.industry}
            onChange={onText("industry")}
            aria-invalid={!!errors.industry}
            aria-describedby={errors.industry ? "f-industry-error" : undefined}
          >
            <option value="">Select an industry</option>
            {industryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field id="f-budget" label="Monthly marketing budget" required error={errors.budget}>
          <select
            id="f-budget"
            name="budget"
            className="field"
            value={values.budget}
            onChange={onText("budget")}
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "f-budget-error" : undefined}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field id="f-goal" label="Primary business goal" required error={errors.goal}>
          <select
            id="f-goal"
            name="goal"
            className="field"
            value={values.goal}
            onChange={onText("goal")}
            aria-invalid={!!errors.goal}
            aria-describedby={errors.goal ? "f-goal-error" : undefined}
          >
            <option value="">Select a goal</option>
            {GOALS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* services */}
      <fieldset className="mt-8 border-t border-mist-200 pt-8">
        <legend className="label-mono text-ink-500">
          Services required<span className="ml-1 text-streak-500">*</span>
        </legend>
        <p className="mt-2 text-[0.85rem] text-ink-400">Select all that apply.</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {serviceOptions.map((s) => {
            const active = values.services.includes(s);
            return (
              <label
                key={s}
                className={cn(
                  "cursor-pointer border px-3.5 py-2.5 text-[0.85rem] transition-colors",
                  active
                    ? "border-volt-500 bg-volt-500/[0.07] text-ink-900"
                    : "border-mist-300 text-ink-500 hover:border-ink-400",
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={active}
                  onChange={() => toggleService(s)}
                />
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex h-3.5 w-3.5 items-center justify-center border text-[0.6rem]",
                      active ? "border-volt-500 bg-volt-500 text-white" : "border-mist-300",
                    )}
                  >
                    {active ? "✓" : ""}
                  </span>
                  {s}
                </span>
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p role="alert" className="mt-3 text-[0.78rem] text-streak-600">
            {errors.services}
          </p>
        )}
      </fieldset>

      <div className="mt-8">
        <Field id="f-message" label="Message" hint="Optional" error={errors.message}>
          <textarea
            id="f-message"
            name="message"
            rows={4}
            className="field resize-y"
            value={values.message}
            onChange={onText("message")}
            placeholder="Current situation, what you have tried, timelines, anything else we should know."
          />
        </Field>
      </div>

      {/* consent */}
      <div className="mt-8 border-t border-mist-200 pt-8">
        <label htmlFor="f-consent" className="flex cursor-pointer items-start gap-3">
          <input
            id="f-consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "f-consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-volt-500"
          />
          <span className="text-[0.85rem] leading-relaxed text-ink-500">
            I agree that ZEAL may store and use these details to respond to my enquiry, as described
            in the{" "}
            <a
              href="#/privacy"
              className="underline decoration-mist-300 underline-offset-4 hover:text-ink-900"
            >
              privacy policy
            </a>
            .<span className="ml-1 text-streak-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="f-consent-error" role="alert" className="mt-2 text-[0.78rem] text-streak-600">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "sending"} className="sm:px-6 sm:py-4">
          {status === "sending" ? "Sending…" : "Submit enquiry"}
          {status === "sending" ? (
            <span
              aria-hidden="true"
              className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white"
            />
          ) : (
            <ArrowRight />
          )}
        </Button>
        <p className="text-[0.8rem] leading-relaxed text-ink-400">
          No spam, no lists. Your details are used to reply to this enquiry only.
        </p>
      </div>
    </form>
  );
}
