type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  "h-captcha-response": string;
};

export type ContactFormSubmitResult =
  | { success: true; message: string }
  | { success: false; message: string };

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactFormSubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
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
