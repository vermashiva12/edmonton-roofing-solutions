
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
}

export const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColor = "bg-roofing-900",
}: CallToActionProps) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-gray-300 text-lg">
              {subtitle}
            </p>
          </div>
          <div>
            <Link to={buttonLink}>
              <Button className="bg-accent-orange hover:bg-accent-orangeDark text-white font-semibold text-lg px-8 py-6">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
