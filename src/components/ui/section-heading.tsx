
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-bold mb-4">
        <span className="border-b-4 border-accent-orange pb-2">{title}</span>
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 mt-4 ${centered ? "mx-auto" : ""} max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
