export function SectionHeading({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <header className="space-y-2">
      {kicker ? (
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-xl md:text-2xl font-serif">{title}</h2>
      <hr className="border-t border-muted" />
    </header>
  );
}
