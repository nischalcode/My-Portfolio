type SectionHeadingProps = {
  number: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ number, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-3 border-t border-border pt-5 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8">
      <p className="font-mono text-xs font-semibold text-primary">{number} /</p>
      <div className="min-w-0">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p>
        ) : null}
      </div>
    </div>
  );
}
