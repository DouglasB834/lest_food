import { StaticImageData } from "next/image";
import dish1 from "../../public/assets/dish1.png";
import dish2 from "../../public/assets/dish2.png";
import dish3 from "../../public/assets/dish3.png";
import dish4 from "../../public/assets/dish4.png";

interface IDataDishMenu {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  price: number;
}

export const DataDishMenu: IDataDishMenu[] = [
  {
    id: 1,
    img: dish1,
    title: "Mie Ramen",
    description: "Lorem de carne e frango",
    price: 45.0,
  },
  {
    id: 2,
    img: dish2,
    title: "Salad Tahu",
    description: "Lorem de carne e frango",
    price: 25.9,
  },
  {
    id: 3,
    img: dish3,
    title: "Roti Bakar",
    description: "Lorem de carne e frango",
    price: 14.5,
  },
  {
    id: 4,
    img: dish4,
    title: "Spaghetti",
    description: "Lorem de carne e frango",
    price: 35.99,
  },
];
