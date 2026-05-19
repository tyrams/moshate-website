type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
};

const contactEmail = "admin@moshateconsulting.co.za";

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

export function submitContactForm(values: ContactFormValues) {
  openEmailClient(values);
  return "Opening your email app";
}
