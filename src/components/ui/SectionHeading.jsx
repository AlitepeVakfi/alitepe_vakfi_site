import { cn } from "../../libs/utils";

const SectionHeading = ({ eyebrow, title, description, tone = "light", className }) => (
  <div className={cn("max-w-2xl", className)}>
    {eyebrow && (
      <p className={cn("eyebrow", tone === "dark" ? "text-accent-300" : "text-accent-700")}>
        {eyebrow}
      </p>
    )}
    <h2
      className={cn(
        "mt-4 font-serif text-[2.25rem] leading-[1.1] font-medium tracking-tight sm:text-5xl",
        tone === "dark" ? "text-white" : "text-brand-950",
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-5 text-lg leading-relaxed",
          tone === "dark" ? "text-white/70" : "text-muted",
        )}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
