import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "../../data/site";
import { cn } from "../../libs/utils";

const icons = {
  instagram: FaInstagram,
  x: FaXTwitter,
  facebook: FaFacebookF,
};

export const SocialIcon = ({ name, className }) => {
  const Icon = icons[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
};

const SocialLinks = ({ tone = "light", className }) => (
  <ul className={cn("flex items-center gap-2", className)}>
    {socialLinks.map((account) => (
      <li key={account.href}>
        <a
          href={account.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={account.label}
          title={account.label}
          className={cn(
            "grid size-10 place-items-center rounded-full transition-colors duration-300",
            tone === "dark"
              ? "bg-white/5 text-white/80 ring-1 ring-white/15 hover:bg-white hover:text-brand-900"
              : "bg-white text-brand-800 ring-1 ring-line hover:bg-brand-700 hover:text-white hover:ring-brand-700",
          )}
        >
          <SocialIcon name={account.icon} className="size-4" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
