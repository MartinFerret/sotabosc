
export interface Event {
  id?: number;
  title: string;
  description: string;
  hour: string;
  date: string;
  isOpen: boolean;
  price: number;
  image: string;
  imageUrl: any;
  googleFormLink: string;
}

export interface EventBar {
  id: number;
  isActive: boolean;
}

export interface TimelineItems {
  status?: string;
  date?: string;
}
