type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
};

const contactEmail = "admin@moshateconsulting.co.za";
const contactFunctionUrl = process.env.NEXT_PUBLIC_CONTACT_FUNCTION_URL;

function openEmailClient(values: ContactFormValues) {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : "",
    "",
    values.message,
  ]
    .filter((line) => line !== "")
    .join("\n");
  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
    values.subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
}

export async function submitContactForm(values: ContactFormValues) {
  if (!contactFunctionUrl) {
    openEmailClient(values);
    return "Opening your email app";
  }

  const response = await fetch(contactFunctionUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const result = (await response.json().catch(() => null)) as {
    message?: string;
  } | null;

  if (!response.ok) {
    throw new Error(result?.message || "Unable to send your message");
  }

  return result?.message || "Thanks for getting in touch";
}
