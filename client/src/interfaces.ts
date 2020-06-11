import { Interface } from "readline";
import { ShippingMethod } from "./contexts/cart-context/context-provider";

export interface CollectionItem {
  _id: string;
  name: string;
  imageUrl: string;
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

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  postCode: string;
  city: string;
  card: string;
  role: string;
}

export interface Order {
  _id: string;
  activeOrder: boolean;
  freightId: ShippingMethod;
  products: CollectionItem[];
  userId: IUser;
}
