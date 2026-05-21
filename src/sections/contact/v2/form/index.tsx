"use client";

import { Button } from "@/src/components/button";
import { TextInput } from "@/src/components/inputs/text-input";
import { TextAreaInput } from "@/src/components/inputs/textarea-input";
import { submitContactForm } from "@/src/utils/contact-form-submit";
import { isLocalHostname } from "@/src/utils/local-hostnames";
import { cn } from "@/src/utils/shadcn";

import * as Yup from "yup";
import { toast } from "sonner";
import { Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const validationMessages = {
  tooShort: "Must be at least ${min} characters",
  tooLong: "Must be at most ${max} characters",
  required: "This field is required",
  email: "Invalid email format",
  phoneFormat: "Invalid phone number format",
  captcha: "Please complete the hCaptcha check",
};

const hCaptchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const createContactUsSchema = (requiresCaptcha: boolean) =>
  Yup.object().shape({
    name: Yup.string()
      .min(2, validationMessages.tooShort)
      .max(50, validationMessages.tooLong)
      .required(validationMessages.required),
    email: Yup.string()
      .email(validationMessages.email)
      .required(validationMessages.required),
    subject: Yup.string()
      .min(2, validationMessages.tooShort)
      .max(50, validationMessages.tooLong)
      .required(validationMessages.required),
    message: Yup.string()
      .min(2, validationMessages.tooShort)
      .max(300, validationMessages.tooLong)
      .required(validationMessages.required),
    phone: Yup.string().matches(/^[+\-()\s\d./]{1,15}$/, {
      message: validationMessages.phoneFormat,
      excludeEmptyString: true,
    }),
    "h-captcha-response": requiresCaptcha
      ? Yup.string().required(validationMessages.captcha)
      : Yup.string(),
  });

export type ContactUsSchemaType = Yup.InferType<
  ReturnType<typeof createContactUsSchema>
>;

const fieldClasses = cn(
  "bg-accent-100 dark:bg-accent-700 rounded-5 border-none",
);

const errorClasses = cn("text-red-500 mt-1");

export function Form() {
  const searchParams = useSearchParams();
  const [initialEmail, setInitialEmail] = useState("");
  const [initialSubject, setInitialSubject] = useState("");
  const [isLocalHost, setIsLocalHost] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const validationSchema = useMemo(
    () => createContactUsSchema(isLocalHost),
    [isLocalHost],
  );

  useEffect(() => {
    setIsLocalHost(isLocalHostname(window.location.hostname));

    const emailParam = searchParams.get("email");
    if (emailParam) {
      setInitialEmail(emailParam);
    }
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setInitialSubject(subjectParam);
    }
  }, [searchParams]);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: "",
          email: initialEmail,
          subject: initialSubject,
          phone: "",
          message: "",
          "h-captcha-response": "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setFieldValue }) => {
          const result = await submitContactForm(values);
          if (result.success) {
            toast.success(result.message);
            resetForm();
          } else {
            toast.error(result.message);
          }
          captchaRef.current?.resetCaptcha();
          setFieldValue("h-captcha-response", "", false);
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px"
          >
            <div>
              <TextInput
                placeholder="Your name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.name && touched.name && (
                <p
                  title={errors.name}
                  aria-live="polite"
                  role="alert"
                  className={errorClasses}
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <TextInput
                placeholder="Your Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.email && touched.email && (
                <p
                  title={errors.email}
                  aria-live="polite"
                  role="alert"
                  className={errorClasses}
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <TextInput
                placeholder="Subject"
                type="text"
                name="subject"
                id="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.subject && touched.subject && (
                <p
                  title={errors.subject}
                  aria-live="polite"
                  role="alert"
                  className={errorClasses}
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <TextInput
                placeholder="Phone"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.phone && touched.phone && (
                <p
                  title={errors.phone}
                  aria-live="polite"
                  role="alert"
                  className={errorClasses}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="lg:col-span-2">
              <TextAreaInput
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  fieldClasses,
                  "min-h-[140px] pt-4 md:min-h-[200px]",
                )}
              />
              {errors.message && touched.message && (
                <p
                  title={errors.message}
                  aria-live="polite"
                  role="alert"
                  className={errorClasses}
                >
                  {errors.message}
                </p>
              )}
            </div>

            {!isLocalHost && (
              <div className="lg:col-span-2">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={hCaptchaSiteKey}
                  reCaptchaCompat={false}
                  onVerify={(token) =>
                    setFieldValue("h-captcha-response", token)
                  }
                  onExpire={() => setFieldValue("h-captcha-response", "")}
                  onError={() => setFieldValue("h-captcha-response", "")}
                />
                {errors["h-captcha-response"] &&
                  touched["h-captcha-response"] && (
                    <p
                      title={errors["h-captcha-response"]}
                      aria-live="polite"
                      role="alert"
                      className={errorClasses}
                    >
                      {errors["h-captcha-response"]}
                    </p>
                  )}
              </div>
            )}

            <div>
              <Button type="submit" disabled={isSubmitting}>
                <span className="relative z-1">
                  {isSubmitting ? "SENDING..." : "SEND A MESSAGE"}
                </span>
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
