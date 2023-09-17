import pessoa1 from "../../public/assets/pessoa1.jpg";
import pessoa2 from "../../public/assets/feddback1.png";
import pessoa3 from "../../public/assets/pessoa3.png";
import pessoa4 from "../../public/assets/pessoa1.jpg";
import { StaticImageData } from "next/image";

interface IDataFeedBack {
  id: number;
  name: string;
  image: StaticImageData;
  feedback: string;
  stars: number;
}

export const dataFeedBack: IDataFeedBack[] = [
  {
    id: 1,
    name: "Douglas Borges",
    image: pessoa1,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    stars: 4,
  },
  {
    id: 2,
    name: "Pedro Salva",
    image: pessoa2,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    stars: 3,
  },
  {
    id: 3,
    name: "Lorena Borges",
    image: pessoa3,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    stars: 5,
  },
  {
    id: 4,
    name: "Cesar Rafael",
    image: pessoa4,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    stars: 2,
  },
];
