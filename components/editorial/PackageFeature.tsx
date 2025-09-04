import Image from 'next/image'
import { EditorialPost } from '@/data/editorialPosts'
import { ArticleListCompact } from './ArticleListCompact'

export function PackageFeature({ feature, items }: { feature: EditorialPost; items: EditorialPost[] }) {
  return (
    <section className="panel rounded-xl p-6 md:p-10">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2">
          <Image src={feature.coverImageUrl} alt="" width={900} height={1200} className="rounded-xl object-cover w-full aspect-[3/4]" />
        </div>
        <div className="md:col-span-3">
          <div className="kicker">Spotlight</div>
          <h2 className="serif text-3xl md:text-4xl mb-2">{feature.title}</h2>
          <p className="text-base text-muted-ink mb-4">{feature.excerpt || 'A curated package on a defining issue.'}</p>
          <ArticleListCompact items={items} />
        </div>
      </div>
    </section>
  )
}
