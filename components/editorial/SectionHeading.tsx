export function SectionHeading({ kicker, title }: { kicker: string; title?: string }) {
  return (
    <div className="mb-6">
      <div className="kicker tracking-wide">{kicker}</div>
      {title && <h2 className="h2 text-3xl md:text-[36px] serif mt-1">{title}</h2>}
      <div className="border-t rule mt-3" />
    </div>
  )
}
