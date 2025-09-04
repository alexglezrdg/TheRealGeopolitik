import Link from 'next/link'
import { NewsletterMiniForm } from './editorial/Nav'

export function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="container-narrow py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="serif text-xl mb-2">The Real Geopolitik</div>
            <p className="text-sm text-muted-ink">Independent analysis on geopolitics and the global economy.</p>
            <div className="mt-4"><NewsletterMiniForm /></div>
          </div>
          {['Topics','About','More'].map((h) => (
            <div key={h}>
              <div className="kicker mb-2">{h}</div>
              <ul className="space-y-2 text-sm">
                {['Link A','Link B','Link C','Link D'].map((l) => (
                  <li key={l}><Link className="link" href="#">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t rule mt-8 pt-6 text-xs text-muted-ink">© {new Date().getFullYear()} The Real Geopolitik</div>
      </div>
    </footer>
  )
}
