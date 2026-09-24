export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

const API_URL = import.meta.env["VITE_API_URL"] || "";

// Flow: Contact form → this service → POST /api/contact → existing backend.
export async function sendContactMessage(message: ContactMessage) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message. Please try again later.");
  }

  return data as { message?: string };
}
