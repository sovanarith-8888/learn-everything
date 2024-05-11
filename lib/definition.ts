export type ProductType = {
  id: number,
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export type PropsType = {
  id: number;
  title: string;
  image: string;
  price: number;
  onClick?: () => void;
}