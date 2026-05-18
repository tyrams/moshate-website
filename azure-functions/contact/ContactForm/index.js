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

module.exports = async function (context, req) {
  const { CONTACT_MAIL_ADDRESS, CONTACT_MAIL_PASSWORD } = process.env;

  if (!CONTACT_MAIL_ADDRESS || !CONTACT_MAIL_PASSWORD) {
    context.log.error("Missing contact mail app settings");
    context.res = {
      status: 500,
      body: { message: "Contact form is not configured" },
    };
    return;
  }

  const validation = validatePayload(req.body);

  if (validation.error) {
    context.res = {
      status: 400,
      body: { message: validation.error },
    };
    return;
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

    context.res = {
      status: 200,
      body: { message: "Thanks for getting in touch" },
    };
  } catch (error) {
    context.log.error(error);
    context.res = {
      status: 500,
      body: { message: "Unable to send your message" },
    };
  }
};
