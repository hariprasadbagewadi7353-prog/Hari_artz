
export interface ArtPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  medium: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}
