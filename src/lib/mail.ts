import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";

export interface SendEmailOpts {
  to: string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: Array<{
    content: string;
    filename: string;
    type?: string;
    disposition?: string;
  }>;
}

async function fetchBearerToken() {
  const clientId = process.env.AZURE_CLIENT_ID!;
  const clientSecret = process.env.AZURE_CLIENT_SECRET!;
  const tenantId = process.env.AZURE_TENANT_ID!;

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
    scope: "https://graph.microsoft.com/.default",
  });

  const response = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token?time=${new Date().getTime()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Failed to get token: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

export async function sendEmail(opts: SendEmailOpts) {
  const missingEnv: string[] = [];
  if (!process.env.AZURE_CLIENT_ID) missingEnv.push("AZURE_CLIENT_ID");
  if (!process.env.AZURE_CLIENT_SECRET) missingEnv.push("AZURE_CLIENT_SECRET");
  if (!process.env.AZURE_TENANT_ID) missingEnv.push("AZURE_TENANT_ID");

  if (missingEnv.length > 0) {
    throw new Error(
      `Azure client credentials are not configured for Graph mail sending. Missing: ${missingEnv.join(
        ", "
      )}`
    );
  }

  const bearerToken = await fetchBearerToken();
  const client = Client.init({
    authProvider: (done) => done(null, bearerToken),
  });

  const toRecipients = opts.to.map((address) => ({
    emailAddress: { address },
  }));

  const message: any = {
    subject: opts.subject,
    body: {
      contentType: opts.html ? "HTML" : "Text",
      content: opts.html || opts.text || "",
    },
    toRecipients,
    from: {
      emailAddress: {
        name: "Zonify.ai",
        address: process.env.REPORTS_FROM_EMAIL || "info@zonify.ai",
      },
    },
  };

  if (opts.attachments && opts.attachments.length > 0) {
    // Map attachments to Microsoft Graph fileAttachment format
    message.attachments = opts.attachments.map((a) => ({
      "@odata.type": "#microsoft.graph.fileAttachment",
      name: a.filename,
      contentBytes: a.content,
      contentType: a.type || "application/octet-stream",
    }));
  }

  return client
    .api("users/info@zonify.ai/sendMail")
    .post({ message, saveToSentItems: "true" });
}
