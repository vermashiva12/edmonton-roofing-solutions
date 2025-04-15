
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
}

export const Hero = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink = "/contact",
  overlay = true,
}: HeroProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-start">
        <h1 className="text-white max-w-2xl mb-4 animate-fade-in">{title}</h1>
        <p className="text-white text-xl md:text-2xl max-w-xl mb-8 animate-fade-in">{subtitle}</p>
        {buttonText && (
          <Link to={buttonLink}>
            <Button className="bg-accent-orange hover:bg-accent-orangeDark text-white font-semibold text-lg px-8 py-6 animate-fade-in">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
