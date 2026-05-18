const { app } = require("@azure/functions");
const nodemailer = require("nodemailer");

const maxLengths = {
  name: 50,
  email: 254,
  subject: 80,
  message: 2000,
  phone: 30,
};

function textValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload) {
  const values = {
    name: textValue(payload?.name),
    email: textValue(payload?.email),
    subject: textValue(payload?.subject),
    message: textValue(payload?.message),
    phone: textValue(payload?.phone),
  };

  if (!values.name || !values.email || !values.subject || !values.message) {
    return { error: "Please complete all required fields" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return { error: "Please enter a valid email address" };
  }

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (values[field].length > maxLength) {
      return { error: `${field} is too long` };
    }
  }

  return { values };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml(values) {
  const safeValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, escapeHtml(value)]),
  );
  const phoneHtml = values.phone
    ? `
      <h3 style="margin:0 0 8px">Phone:</h3>
      <p style="margin:0">${safeValues.phone}</p>
      <br/>`
    : "";

  return `
    <h3 style="margin:0 0 8px">Name:</h3>
    <p style="margin:0">${safeValues.name}</p>
    <br/>
    <h3 style="margin:0 0 8px">Email:</h3>
    <p style="margin:0">${safeValues.email}</p>
    <br/>
    ${phoneHtml}
    <h3 style="margin:0 0 8px">Message:</h3>
    <p style="margin-top:0; white-space:pre-wrap">${safeValues.message}</p>
  `;
}

app.http("ContactForm", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "ContactForm",
  handler: async (request, context) => {
    const { CONTACT_MAIL_ADDRESS, CONTACT_MAIL_PASSWORD } = process.env;

    if (!CONTACT_MAIL_ADDRESS || !CONTACT_MAIL_PASSWORD) {
      context.error("Missing contact mail app settings");
      return {
        status: 500,
        jsonBody: { message: "Contact form is not configured" },
      };
    }

    const payload = await request.json().catch(() => null);
    const validation = validatePayload(payload);

    if (validation.error) {
      return {
        status: 400,
        jsonBody: { message: validation.error },
      };
    }

    const values = validation.values;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: CONTACT_MAIL_ADDRESS,
        pass: CONTACT_MAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: CONTACT_MAIL_ADDRESS,
        replyTo: values.email,
        to: CONTACT_MAIL_ADDRESS,
        subject: values.subject,
        html: buildHtml(values),
      });

      return {
        status: 200,
        jsonBody: { message: "Thanks for getting in touch" },
      };
    } catch (error) {
      context.error(error);

      return {
        status: 500,
        jsonBody: { message: "Unable to send your message" },
      };
    }
  },
});
