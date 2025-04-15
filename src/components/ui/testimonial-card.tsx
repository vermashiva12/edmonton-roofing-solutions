
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image?: string;
}

export const TestimonialCard = ({
  name,
  location,
  testimonial,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        {Array(5 - rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-5 w-5 text-gray-300" />
          ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        {image && (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};
