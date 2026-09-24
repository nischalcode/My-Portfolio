import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/services/contact";

type FormStatus = { type: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus({ type: "sending", message: "Sending…" });

    try {
      const result = await sendContactMessage({
        name: String(values.get("name") ?? ""),
        email: String(values.get("email") ?? ""),
        message: String(values.get("message") ?? ""),
      });
      setStatus({ type: "success", message: result.message ?? "Thanks — your message was sent." });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please email me directly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-describedby="form-status">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className="h-11 bg-background" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 bg-background"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          className="resize-y bg-background"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            size="lg"
            disabled={status.type === "sending"}
            className="w-full sm:w-auto"
          >
            <Send /> {status.type === "sending" ? "Sending" : "Send message"}
          </Button>
        </motion.div>
        <p
          id="form-status"
          aria-live="polite"
          className={`text-sm ${status.type === "error" ? "text-destructive" : "text-muted-foreground"}`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
