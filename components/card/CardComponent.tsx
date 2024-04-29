
import { Card } from "flowbite-react";

type PropsProductType = {
  title: string;
  image: string;
  description: string;
}

export function CardComponent({title,image,description}: PropsProductType) {

  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}


export default CardComponent