import { isLocalHostname } from "./local-hostnames";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  "h-captcha-response": string;
};

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const web3FormsEndpoint = "https://api.web3forms.com/submit";

export type ContactFormSubmitResult =
  | { success: true; message: string }
  | { success: false; message: string };

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactFormSubmitResult> {
  if (isLocalHostname(window.location.hostname)) {
    return {
      success: true,
      message:
        "Local contact form check passed. hCaptcha and email delivery run on deployed domains.",
    };
  }

  if (!web3FormsAccessKey) {
    return {
      success: false,
      message:
        "Contact form is not configured. Please email us directly instead.",
    };
  }

  try {
    const formData = new FormData();
    formData.append("access_key", web3FormsAccessKey);
    formData.append("name", values.name.trim());
    formData.append("email", values.email.trim());
    formData.append("subject", values.subject.trim());
    formData.append("message", values.message.trim());
    formData.append("h-captcha-response", values["h-captcha-response"]);
    formData.append("from_name", "Moshate Consulting Website");

    if (values.phone?.trim()) {
      formData.append("phone", values.phone.trim());
    }

    const response = await fetch(web3FormsEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    const result = await response.json().catch(() => ({
      success: false,
      message: "Contact service returned an unexpected response.",
    }));

    if (result.success) {
      return {
        success: true,
        message: "Thank you! Your message has been sent.",
      };
    }

    return {
      success: false,
      message:
        result.message ||
        "Something went wrong. Please try again or email us directly.",
    };
  } catch {
    return {
      success: false,
      message: "Unable to send your message. Please try again later.",
    };
  }
}
