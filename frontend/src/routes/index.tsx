import { createFileRoute } from "@tanstack/react-router";

import { personalInfo } from "@/data/personal";
import { HomePage } from "@/pages/Home/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${personalInfo.name} | ${personalInfo.title}` },
      {
        name: "description",
        content: `Portfolio of ${personalInfo.name}, a BSc CSIT student and junior full-stack developer building practical applications with the MERN stack.`,
      },
      { property: "og:title", content: `${personalInfo.name} | ${personalInfo.title}` },
      {
        property: "og:description",
        content: `BSc CSIT student and junior full-stack developer building practical web applications with React, TypeScript, Node.js, Express, and MongoDB.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
