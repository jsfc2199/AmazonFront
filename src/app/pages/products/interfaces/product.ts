import { Category } from './category';
import { CustomerReview } from './customer-review';
import { ProductImage } from './product-image';

export interface Product {
  us_item_id: string;
  product_id: string;
  title: string;
  short_description_html: string;
  detailed_description_html: string;
  seller_id: string;
  seller_name: string;
  product_type_id: string;
  product_type: string;
  manufacturer: string;
  product_page_url: string;
  min_quantity: number;
  max_quantity: number;
  quantity: number;
  in_stock: boolean;
  reviews: number;
  rating?: number;
  offer_id: string;
  offer_type: OfferType;
  price: number;
  was_price: number;
  categories?: Category[];
  images?: ProductImage[];
  customerReviews?: CustomerReview[];
}

export enum OfferType {
  OnlineAndStore = 'ONLINE_AND_STORE',
  OnlineOnly = 'ONLINE_ONLY',
}

export interface ProductsCard {
  uuid: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  images: string;
}
