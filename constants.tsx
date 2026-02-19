
import { ArtPiece, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admin Panel', href: '#post' },
  { label: 'Contact', href: '#contact' },
];

export const ART_PIECES: ArtPiece[] = [
  {
    id: '1',
    title: 'The Silent Observer',
    description: 'A deep study in shadow and light, capturing a moment of profound introspection.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    year: '2023',
    medium: 'Charcoal & Graphite on Canvas'
  },
  {
    id: '2',
    title: 'Eternal Elegance',
    description: 'The grace of movement frozen in a single, delicate line of graphite.',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    year: '2024',
    medium: 'Graphite on Acid-Free Paper'
  },
  {
    id: '3',
    title: 'Fragmented Memories',
    description: 'Exploring the blurring lines of memory through soft, textured charcoal strokes.',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80',
    year: '2023',
    medium: 'Mixed Media'
  },
  {
    id: '4',
    title: 'The Gilded Soul',
    description: 'Incorporating gold leaf to symbolize the inner light that persists through darkness.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    year: '2024',
    medium: 'Oil & Gold Leaf'
  },
  {
    id: '5',
    title: 'Velvet Whispers',
    description: 'A study of texture and human vulnerability in the quiet hours of night.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    year: '2022',
    medium: 'Charcoal'
  },
  {
    id: '6',
    title: 'Untold Wisdom',
    description: 'Capturing the complex roadmap of a life well-lived through detailed facial features.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    year: '2023',
    medium: 'Sanguine & Graphite'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Vance',
    role: 'Art Collector',
    text: "SoulSketch doesn't just draw faces; they capture souls. The commissioned portrait of my father brought my entire family to tears with its emotional depth.",
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '2',
    name: 'Serena Miller',
    role: 'Interior Designer',
    text: "Finding art that feels both modern and timeless is rare. SoulSketch's work is the centerpiece of every room I design. Simply breathtaking.",
    avatar: 'https://i.pravatar.cc/150?u=serena'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Gallery Owner',
    text: "The technical mastery over charcoal shown here is world-class. Each piece tells a story that resonates long after you walk away.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];
