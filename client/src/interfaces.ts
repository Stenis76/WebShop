export interface CollectionItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  category: string[];
  season: string[];
  inventory: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  description: string;
  quantity?: number;
}

// behåll till kategorier
export interface Collection {
  id: any;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
