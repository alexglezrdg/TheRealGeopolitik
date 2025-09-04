export type EditorialPost = {
  id: string
  slug: string
  title: string
  kicker?: string
  excerpt?: string
  authors: string[]
  coverImageUrl: string
  thumbUrl: string
  publishedAt: string
  tags: string[]
  youtubeUrl?: string
}

const now = Date.now()
const ago = (d: number) => new Date(now - d * 86400000).toISOString()

export const editorialPosts: EditorialPost[] = [
  {
    id: 'e1', slug: 'economic-security-state',
    title: 'The Economic Security State Is Here',
    kicker: 'Feature',
    excerpt: 'States are reorganizing their economies around national security—and the consequences will be global.',
    authors: ['Alex Chen'],
    coverImageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(1),
    tags: ['Analysis']
  },
  {
    id: 'e2', slug: 'supply-chains-after-shocks',
    title: 'Supply Chains After the Shocks',
    kicker: 'Analysis',
    authors: ['Maya Singh'],
    coverImageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(2),
    tags: ['Economy']
  },
  {
    id: 'e3', slug: 'energy-corridors',
    title: 'Energy Corridors and the Balance of Power',
    kicker: 'Brief',
    authors: ['Diego Alvarez'],
    coverImageUrl: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(3),
    tags: ['Energy']
  },
  {
    id: 'e4', slug: 'maritime-chokepoints',
    title: 'Maritime Chokepoints That Matter',
    kicker: 'Map',
    authors: ['Alex Chen'],
    coverImageUrl: 'https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(5),
    tags: ['Security']
  },
  {
    id: 'e5', slug: 'europe-green-transition',
    title: 'Europe’s Green Transition Meets Reality',
    kicker: 'Opinion',
    authors: ['Maya Singh'],
    coverImageUrl: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(7),
    tags: ['Europe']
  },
  {
    id: 'e6', slug: 'digital-sovereignty',
    title: 'Digital Sovereignty and the Splinternet',
    kicker: 'Analysis',
    authors: ['Alex Chen'],
    coverImageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(10),
    tags: ['Tech']
  },
  {
    id: 'e7', slug: 'food-security',
    title: 'Food Security Under Climate Pressure',
    kicker: 'Report',
    authors: ['Diego Alvarez'],
    coverImageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(14),
    tags: ['Climate']
  },
  {
    id: 'e8', slug: 'industrial-policy',
    title: 'The Return of Industrial Policy',
    kicker: 'Essay',
    authors: ['Maya Singh'],
    coverImageUrl: 'https://images.unsplash.com/photo-1483825366482-1265f6ea9bc9?q=80&w=1200&auto=format&fit=crop',
    thumbUrl: 'https://images.unsplash.com/photo-1483825366482-1265f6ea9bc9?q=80&w=256&auto=format&fit=crop',
    publishedAt: ago(20),
    tags: ['Economy']
  }
]
