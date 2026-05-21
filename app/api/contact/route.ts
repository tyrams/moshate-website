import { NextResponse } from "next/server";
import {
  getHostnameFromHostHeader,
  isLocalHostname,
} from "@/src/utils/local-hostnames";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  phone?: unknown;
  "h-captcha-response"?: unknown;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  [key: string]: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isLocalRequest(request: Request) {
  const hostHeader = request.headers.get("host") || "";
  return isLocalHostname(getHostnameFromHostHeader(hostHeader));
}

function jsonResponse(
  body: { success: boolean; message: string },
  status: number,
) {
  return NextResponse.json(body, { status });
}

async function readWeb3FormsResponse(response: Response) {
  try {
    return (await response.json()) as Web3FormsResponse;
  } catch {
    return {
      success: false,
      message: response.ok
        ? "Unexpected response from contact service."
        : "Contact service is unavailable.",
    };
  }
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  const localRequest = isLocalRequest(request);

  if (!accessKey && !localRequest) {
    return jsonResponse(
      {
        success: false,
        message:
          "Contact form is not configured. Please email admin@moshateconsulting.co.za directly.",
      },
      503,
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, message: "Invalid request." }, 400);
  }

  const name = getTrimmedString(body.name);
  const email = getTrimmedString(body.email);
  const subject = getTrimmedString(body.subject);
  const message = getTrimmedString(body.message);
  const phone = getTrimmedString(body.phone);
  const captchaResponse = getTrimmedString(body["h-captcha-response"]);

  if (!name || !email || !subject || !message) {
    return jsonResponse(
      { success: false, message: "Missing required fields." },
      400,
    );
  }

  if (!emailPattern.test(email)) {
    return jsonResponse(
      { success: false, message: "Please enter a valid email address." },
      400,
    );
  }

  if (!captchaResponse && !localRequest) {
    return jsonResponse(
      { success: false, message: "Please complete the hCaptcha check." },
      400,
    );
  }

  if (localRequest) {
    return jsonResponse(
      {
        success: true,
        message:
          "Local contact form check passed. hCaptcha and email delivery run on deployed domains.",
      },
      200,
    );
  }

  try {
    const formData = new FormData();
    formData.append("access_key", accessKey || "");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("h-captcha-response", captchaResponse);
    formData.append("from_name", "Moshate Consulting Website");
    if (phone) {
      formData.append("phone", phone);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let response: Response;
    try {
      response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    const result = await readWeb3FormsResponse(response);
    const success = response.ok && result.success === true;

    return jsonResponse(
      {
        success,
        message:
          typeof result.message === "string" && result.message
            ? result.message
            : success
              ? "Message sent."
              : "Failed to send message.",
      },
      success ? 200 : 502,
    );
  } catch {
    return jsonResponse(
      {
        success: false,
        message:
          "Failed to send message. Please email admin@moshateconsulting.co.za directly.",
      },
      502,
    );
  }
}
