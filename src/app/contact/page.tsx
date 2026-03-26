"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LucideArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.CONTACT_RECEIVER_EMAIL || "contact@zonify.ai"],
          subject: `Contact form message: ${subject}`,
          text: `You have received a new message from the contact form Zonify.ai.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
        }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send email");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setErrorMessage(err?.message || "Unknown error");
      setStatus("error");
    }
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-12 sm:mt-16 md:mt-20 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
      <div className="mb-6 sm:mb-8 lg:mb-12 flex flex-col gap-6 sm:gap-8 w-full lg:w-1/4">
        <div className="text-sm">
          <p className="text-muted-foreground mb-2">
            <span>→ Contact</span>
          </p>
          <p className="mb-1">contact@zonify.ai</p>
          <p>+45 60 10 86 87</p>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground mb-2">
            <span>→ Location</span>
          </p>
          <p>Lyngby</p>
          <p>Hollandsvej 12</p>
          <p>2800 Kgs. Lyngby</p>
          <p>Denmark</p>
        </div>
      </div>
      <div className="w-full flex-1">
        <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-4">Contact us</h1>
        <p className="text-muted-foreground mb-6 sm:mb-8">
          Send us a message and we'll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <Input
              className="w-full rounded-md border px-3 py-2 h-10 sm:h-11"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <Input
              type="email"
              className="w-full rounded-md border px-3 py-2 h-10 sm:h-11"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Subject</label>
            <Input
              className="w-full rounded-md border px-3 py-2 h-10 sm:h-11"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <Textarea
              className="w-full rounded-md border px-3 py-2 h-32 sm:h-40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-sm sm:text-base">
              Message sent — thank you!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm sm:text-base">
              Error: {errorMessage}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
