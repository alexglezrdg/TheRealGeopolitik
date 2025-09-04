export function SubscribeBanner() {
  return (
    <section className="panel rounded-xl px-6 py-10 md:px-12 md:py-14">
      <div className="max-w-3xl">
        <div className="italic serif text-3xl md:text-4xl mb-2">Stay informed.</div>
        <p className="text-base text-muted-ink mb-4">Weekly briefings and deep analysis on geopolitics and the global economy.</p>
        <button className="btn btn-accent">Subscribe now</button>
      </div>
    </section>
  )
}

export function PodcastBand() {
  return (
    <section className="rounded-xl border rule p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="kicker">Podcast</div>
          <h3 className="serif text-3xl md:text-4xl mb-3">The Rise of the Economic Security State</h3>
          <a href="#" className="link">Follow the Podcast</a>
        </div>
        <div className="aspect-[3/4] md:aspect-[3/4] bg-[var(--brand-bg)] rounded-lg grid place-items-center text-muted-ink">Cover Image</div>
      </div>
    </section>
  )
}
