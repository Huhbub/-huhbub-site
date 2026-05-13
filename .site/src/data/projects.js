// src/data/projects.js
// huhbub projects — add more here when ready
// type: 'self' | 'commissioned' | 'collaborative'

export const projects = [
  {
    slug: 'black-to-the-future',
    title: 'Black to the Future',
    year: '2023',
    type: 'collaborative',
    tags: ['festival', 'afrofuturism', 'curation'],
    caption: 'afrofuturism at the British Library',
    description: 'A ground-breaking Afrofuturist festival at the British Library. huhbub produced and creatively directed; Irenosen Okojie founded and led artistically.',
    image: '/images/project-bttf.jpg',
    poster: '/images/poster-bttf.jpg',
    color: '#1A0A2E',
  },
  {
    slug: 'clean-prose',
    title: 'Clean Prose',
    year: '2016–2020',
    type: 'commissioned',
    tags: ['literary events', 'books', 'community'],
    caption: '70+ literary events with Irenosen Okojie',
    description: 'Over 70 literary events produced for Clean Prose — the independent literary salon founded by Irenosen Okojie. Salons, launches, festivals and readings across London.',
    image: '/images/project-clean-prose.jpg',
    poster: '/images/poster-clean-prose.jpg',
    color: '#0A1A0E',
  },
  {
    slug: 'that-time-of-the-month',
    title: 'That Time of the Month',
    year: '2018–2019',
    type: 'self',
    tags: ['book club', 'jane austen', 'community'],
    caption: 'Jane Austen, feminist readings, feelings',
    description: 'A feminist book club and screening series bringing women together around Jane Austen — with wine, feelings, and zero irony.',
    image: '/images/project-that-time.jpg',
    poster: '/images/poster-that-time.jpg',
    color: '#1A0A10',
  },
  {
    slug: 'strong-women-squad',
    title: 'Strong Women Squad',
    year: '2018',
    type: 'self',
    tags: ['community', 'wellbeing', 'events'],
    caption: 'sisterhood in east London',
    description: 'A community of women and non-binary people making space for strength, softness and solidarity — parties, panels and everything in between.',
    image: '/images/project-strong-women.jpg',
    poster: '/images/poster-strong-women.jpg',
    color: '#1A100A',
  },
  {
    slug: 'purple-reign',
    title: 'Purple Reign',
    year: '2018',
    type: 'self',
    tags: ['music', 'cabaret', 'celebration'],
    caption: 'a Prince-inspired birthday bakeoff cabaret',
    description: 'A vegan birthday bakeoff cabaret in tribute to Prince. One night, one legend, many cakes.',
    image: '/images/project-purple-reign.jpg',
    poster: '/images/poster-purple-reign.jpg',
    color: '#1A0A1A',
  },
  {
    slug: 'feeling-noughties',
    title: 'Feeling Noughties',
    year: '2016',
    type: 'self',
    tags: ['music', 'nostalgia', 'party'],
    caption: 'noughties nostalgia at Drink Shop & Do',
    description: 'A Y2K nostalgia party celebrating the music, fashion and general chaos of the 2000s. Sold out. Obviously.',
    image: '/images/project-feeling-noughties.jpg',
    poster: '/images/poster-feeling-noughties.jpg',
    color: '#0A0A1A',
  },
  {
    slug: 'happiness-workshop',
    title: 'The Happiness Workshop',
    year: '2019–present',
    type: 'self',
    tags: ['wellbeing', 'workshop', 'facilitation'],
    caption: 'joy as a practice, not a destination',
    description: 'A standalone workshop experience on the science and art of happiness. Delivered at the Barbican, Primadonna, Also Festival, Logging Off Club and more.',
    image: '/images/project-happiness.jpg',
    poster: '/images/poster-happiness.jpg',
    color: '#1A1A0A',
  },
  {
    slug: 'curious-mermaid',
    title: 'The Curious Mermaid',
    year: '2024–present',
    type: 'self',
    tags: ['writing', 'community', 'substack'],
    caption: 'stories of creativity, community & belonging',
    description: 'An essay series and community newsletter exploring creativity, community, and the beauty in what others might overlook.',
    image: '/images/project-curious-mermaid.jpg',
    poster: '/images/poster-curious-mermaid.jpg',
    color: '#0A1A1A',
  },
];

export function getRandomProject() {
  return projects[Math.floor(Math.random() * projects.length)];
}

export function getFeaturedProject() {
  // Returns a seeded-random project based on the day, so it changes daily but is consistent per day
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return projects[dayOfYear % projects.length];
}
