import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <p className="min-w-0 text-sm text-muted-foreground">© 2026 {personalInfo.name}</p>
        <a href="#top" className="shrink-0 font-mono text-xs font-semibold text-primary">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
