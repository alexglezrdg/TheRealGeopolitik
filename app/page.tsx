import Image from 'next/image'
import Link from 'next/link'
import { editorialPosts } from '@/data/editorialPosts'
import { ArticleListCompact, PostCard } from '@/components/editorial/ArticleListCompact'
import { SectionHeading } from '@/components/editorial/SectionHeading'
import { SubscribeBanner, PodcastBand } from '@/components/editorial/SubscribeBanner'
import { PackageFeature } from '@/components/editorial/PackageFeature'
import { AdPlaceholder } from '@/components/editorial/AdPlaceholder'

export default function HomePage() {
  const feature = editorialPosts[0]
  const latest = editorialPosts.slice(0, 8)
  const currentIssue = editorialPosts.slice(0, 6)
  const spotlightFeature = editorialPosts[3]
  const spotlightList = editorialPosts.slice(2, 8)
  const analysisList = editorialPosts.slice(1, 6)
  const moreReads = editorialPosts.slice(2, 7)

  return (
    <>
      {/* Top Notice Bar */}
      <div className="text-center text-sm py-2 border-b rule">New: Subscribe for weekly briefings.</div>

      {/* HERO SECTION */}
      <section className="container-narrow py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-3">
            <div className="kicker">Feature</div>
            <h1 className="serif text-4xl md:text-[56px] leading-tight">{feature.title}</h1>
            <div className="text-sm text-muted-ink">{feature.authors.join(', ')} • {new Date(feature.publishedAt).toLocaleDateString()}</div>
            <Image src={feature.coverImageUrl} alt="" width={1200} height={800} className="rounded-xl mt-3 aspect-[3/2] object-cover w-full" />
          </div>
          <aside className="md:col-span-1">
            <div className="kicker mb-2">Latest Analysis</div>
            <ArticleListCompact items={latest} />
          </aside>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section className="container-narrow py-8">
        <SubscribeBanner />
      </section>

      {/* CURRENT ISSUE */}
      <section className="container-narrow py-12 md:py-20">
        <SectionHeading kicker="Current Issue" />
        <div className="grid md:grid-cols-3 gap-8">
          {currentIssue.map((p) => (
            <div key={p.id} className="space-y-3">
              <Image src={p.coverImageUrl} alt="" width={800} height={600} className="rounded-lg aspect-[3/2] object-cover w-full" />
              <PostCard post={p} />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="#" className="link">Full Table of Contents</Link>
        </div>
      </section>

      {/* FEATURED PACKAGE */}
      <section className="container-narrow py-12 md:py-20">
        <PackageFeature feature={spotlightFeature} items={spotlightList} />
      </section>

      {/* ANALYSIS STRIP w/ AD */}
      <section className="container-narrow py-12 md:py-20">
        <SectionHeading kicker="Analysis" />
        <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
          <ArticleListCompact items={analysisList} />
          <div className="hidden md:block"><AdPlaceholder size="300x600" /></div>
        </div>
      </section>

      {/* PODCAST */}
      <section className="container-narrow py-12 md:py-20">
        <PodcastBand />
      </section>

      {/* MORE READS + AD */}
      <section className="container-narrow py-12 md:py-20">
        <SectionHeading kicker="More Reads" />
        <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
          <ArticleListCompact items={moreReads} />
          <div className="hidden md:block"><AdPlaceholder size="300x250" /></div>
        </div>
      </section>
    </>
  )
}
