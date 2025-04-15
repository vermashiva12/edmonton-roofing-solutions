
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard = ({
  image,
  title,
  description,
  link,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-accent-orange hover:text-accent-orangeDark font-medium"
        >
          Learn More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};
